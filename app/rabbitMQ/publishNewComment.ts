import {publishToQueue, QueueManager} from "./setupRabbit";
import {CommentDTO} from "../entities/DTOs/CommentDTO";

/**
 * Publishes a new comment to a RabbitMQ queue for processing.
 * 
 * @remarks
 * This function publishes a CommentDTO object to the RabbitMQ queue named "new_comments".
 * 
 * @param {CommentDTO} comment - The CommentDTO object representing the new comment.
 * @returns {void}
 */
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