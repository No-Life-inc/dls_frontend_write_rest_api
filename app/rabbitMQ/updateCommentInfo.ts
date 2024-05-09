import { Comment } from "../entities/entities/Comment";
import { CommentInfo } from "../entities/entities/CommentInfo";
import { publishToQueue } from "./setupRabbit";
import { QueueManager } from "./setupRabbit"; // Import setupQueue

export function updateCommentInfo(commentGuid: String, updatedCommentInfo: Partial<CommentInfo>) {
    // Get the QueueManager instance and set up the queue
    const queueManager = QueueManager.getInstance();

    const commentForMongoDB = {
        commentGuid: commentGuid,
        commentInfo: updatedCommentInfo,
    };

    // Get the channel from the QueueManager instance
    const channel = queueManager.getChannel("update_comment_info");

    // Pass the channel as the second argument to publishToQueue
    if (channel) {
        publishToQueue(commentForMongoDB, channel, "update_comment_info");
    } else {
        console.error("Failed to get channel for update_comment_info");
    }
}