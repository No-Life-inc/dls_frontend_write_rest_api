import { IsOptional, IsString, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CommentInfoDTO } from "./CommentInfoDTO";
import { CommentReactionDTO } from "./CommentReactionDTO";
import { UserDTO } from "./UserDTO";
import { StoryDTO } from "./StoryDTO";
import { Comment } from "../entities/Comment";

/**
 * Data Transfer Object (DTO) for Comment entity.
 * 
 * This DTO is used to transfer data related to a Comment entity.
 * 
 * @remarks
 * This DTO contains information about a comment, including its ID, GUID,
 * creation date, associated comment infos, reactions, user, and story.
 */
export class CommentDTO {
    /**
     * The ID of the comment.
     * @type {number}
     * @optional
     */
    @IsOptional()
    commentId: number;
  
    /**
     * The GUID of the comment.
     * @type {string}
     * @optional
     */
    @IsString()
    @IsOptional()
    commentGuid: string;
  
    /**
     * The creation date of the comment.
     * @type {Date}
     * @optional
     */
    @IsDate()
    @IsOptional()
    createdAt: Date;
  
    /**
     * List of comment infos associated with this comment.
     * @type {CommentInfoDTO[]}
     * @nested
     */
    @ValidateNested({ each: true })
    @Type(() => CommentInfoDTO)
    commentInfos: CommentInfoDTO[];
  
    /**
     * List of reactions received by this comment.
     * @type {CommentReactionDTO[]}
     * @nested
     */
    @ValidateNested({ each: true })
    @Type(() => CommentReactionDTO)
    commentReactions: CommentReactionDTO[];
  
    /**
     * The user who made this comment.
     * @type {UserDTO}
     * @nested
     */
    @ValidateNested()
    @Type(() => UserDTO)
    user: UserDTO;
  
    /**
     * The story to which this comment belongs.
     * @type {StoryDTO}
     * @nested
     */
    @ValidateNested()
    @Type(() => StoryDTO)
    story: StoryDTO;
  
    /**
     * Constructor for CommentDTO.
     * @param {Comment} comment - The Comment entity to create DTO from.
     */
    constructor(comment: Comment) {
      this.commentGuid = comment.commentGuid;
      this.createdAt = comment.createdAt;
      if(comment.commentInfos){
          this.commentInfos = comment.commentInfos.map(
              (commentInfo) => new CommentInfoDTO(commentInfo)
          );
      }
      if(comment.commentReactions){
          this.commentReactions = comment.commentReactions.map(
              (commentReaction) => new CommentReactionDTO(commentReaction)
          );
      }
      this.user = new UserDTO(comment.user);
      if (comment.story) {
          this.story = new StoryDTO(comment.story, false);  // Pass false to prevent creating new CommentDTO instances
      }
    }
  
  }
