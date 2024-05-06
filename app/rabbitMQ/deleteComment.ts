import { QueueManager, publishToQueue } from "./setupRabbit";

export function deleteComment(commentGuid: string) {
  // Get the QueueManager instance and set up the queue
  const queueManager = QueueManager.getInstance();

  // Get the channel from the QueueManager instance
  const channel = queueManager.getChannel("delete_comment");

  // Pass the channel as the second argument to publishToQueue
  if (channel) {
    publishToQueue(commentGuid, channel, "delete_comment");
  } else {
    console.error("Failed to get channel for delete_comment");
  }
}