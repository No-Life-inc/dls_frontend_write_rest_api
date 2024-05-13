import {Body, Post, Route, Request, Delete, Path, Put} from "tsoa";
import express from "express";
import {CreateCommentDTO} from "../entities/interfaces/CreateCommentDTO";
import {CommentDTO} from "../entities/DTOs/CommentDTO";
import {User} from "../entities/entities/User"
import {Comment} from "../entities/entities/Comment"
import {getRepository} from "typeorm";
import {CommentInfo} from "../entities/entities/CommentInfo";
import {Story} from "../entities/entities/Story"
import {HttpError} from "routing-controllers";
import {publishNewComment} from "../rabbitMQ/publishNewComment"
import {deleteComment} from "../rabbitMQ/deleteComment"
import {updateCommentInfo} from "../rabbitMQ/updateCommentInfo"

const router = express.Router();

/**
 * Controller for handling comments related endpoints.
 */
@Route('/comments')
export class CommentsController{
    /**
     * Endpoint to create a new comment.
     * 
     * @param {Request} req - The request object.
     * @param {CreateCommentDTO} requestBody - The request body containing the comment data.
     * @returns {Promise<CommentDTO>} A Promise resolving to the created comment DTO.
     */
    @Post()
    public async createComment(@Request() req: any, @Body() requestBody: CreateCommentDTO): Promise<CommentDTO>{
        console.log(req.userGuid)
        const userGuid = req.userGuid;
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { userGuid: userGuid }, relations: ['userInfos']});

        if (!user) {
        throw new HttpError(400, 'User not found');
        }

        const storyRepository = getRepository(Story)
        const story = await storyRepository.findOne({where: {storyGuid: requestBody.story.storyGuid}, relations: ['storyInfos', 'comments', 'user', 'user.userInfos']});

        if(!story){
            throw new HttpError(404, 'Story not found');
        }

        let newComment = new Comment();
        newComment.commentGuid = requestBody.commentGuid;
        newComment.createdAt = new Date();
        newComment.user = user;
        let newCommentInfo = new CommentInfo();
        newCommentInfo.bodyText = requestBody.commentInfo.bodyText;
        newCommentInfo.createdAt = new Date();
        newCommentInfo.comment = newComment;
        newComment.commentInfos = [newCommentInfo]
        newComment.story = story;
        newComment.story.storyGuid = requestBody.story.storyGuid;
        
        // Initialize the comments array if it's undefined
        if (!story.comments) {
            story.comments = [];
        }

        // Add the new comment to the story's comments array
        story.comments.push(newComment);

        const commentRepository = getRepository(Comment);


        try{
            await storyRepository.save(story);
            await commentRepository.save(newComment);
        }catch(error){
            throw new HttpError(400, 'Failed to add comment to story');
        }

        const commentDTO = new CommentDTO(newComment)
        console.log(commentDTO);

        publishNewComment(commentDTO)
        return commentDTO;
    }

    /**
     * Endpoint to delete a comment by its GUID.
     * 
     * @param {string} commentGuid - The GUID of the comment to delete.
     * @returns {Promise<any>} A Promise resolving to the result of the deletion.
     */
    @Delete('{commentGuid}')
    public async deleteComment(@Path() commentGuid: string): Promise<any> {
        const commentRepository = getRepository(Comment);
        const comment = await commentRepository.findOne({ where: { commentGuid: commentGuid }});

        if (!comment) {
        throw new Error('Comment not found');
        }

        // Delete the comment
        await commentRepository.remove(comment);

        // Publish the delete event to the queue
        deleteComment(commentGuid);
    }

    /**
     * Endpoint to update a comment by its GUID.
     * 
     * @param {string} commentGuid - The GUID of the comment to update.
     * @param {{ commentInfo: Partial<CommentInfo> }} commentData - The data to update the comment with.
     * @returns {Promise<any>} A Promise resolving to the updated comment DTO.
     */
    @Put('{commentGuid}')
    public async updateComment(@Path() commentGuid: string, @Body() commentData: { commentInfo: Partial<CommentInfo> }): Promise<any> {
    const commentRepository = getRepository(Comment);
    const comment = await commentRepository.findOne({ where: { commentGuid: commentGuid }, relations: ['commentInfos', 'user', 'user.userInfos']});

    if (!comment) {
        throw new Error('Comment not found');
    }

    // Update the commentInfo
    const newCommentInfo = Object.assign(new CommentInfo(), commentData.commentInfo);
    newCommentInfo.comment = comment; // Set the comment
    newCommentInfo.createdAt = new Date();
    comment.commentInfos.push(newCommentInfo);

    // Save the comment
    const updatedComment = await commentRepository.save(comment);

    // Convert the updated comment to a CommentDTO
    const commentDTO = new CommentDTO(updatedComment);

    // Update each CommentInfo in commentInfos
    commentDTO.commentInfos.forEach((commentInfoDTO) => {
        updateCommentInfo(commentGuid, commentInfoDTO);
    });

    return commentDTO;
}
}

export default router;