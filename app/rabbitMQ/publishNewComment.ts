import {publishToQueue, QueueManager} from "./setupRabbit";
import {CommentDTO} from "../entities/DTOs/CommentDTO";


export function publishNewComment(comment: CommentDTO){

    const queueManager = QueueManager.getInstance();
    const channel = queueManager.getChannel("new_comments");

    if(channel) {
        publishToQueue(comment, channel, "new_comments");
    } else {
        console.error("Failed to get channel for new_comments");
    }
}

export default publishNewComment;