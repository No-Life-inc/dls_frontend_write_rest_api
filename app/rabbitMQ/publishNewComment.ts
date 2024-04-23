import {Comment} from "../entities/entities/Comment"
import {publishToQueue, QueueManager} from "./setupRabbit";


export function publishNewComment(comment: Comment){

    const queueManager = QueueManager.getInstance();

    const commentForMongoDB = {
        commentGuid: comment.commentGuid,
        story:{
            storyGuid: comment.story.storyGuid,
        },
        user: {
            userGuid: comment.user.userGuid,
        },
        createdAt: comment.createdAt,
        commentInfos: comment.commentInfos.map((info) => ({
            bodyText: info.bodyText,
            createdAt: info.createdAt,
        })),
    };

    const channel = queueManager.getChannel("new_comments");

    if(channel) {
        publishToQueue(commentForMongoDB, channel, "new_comments");
    } else {
        console.error("Failed to get channel for new_comments");
    }
}

export default publishNewComment;