import { QueueManager, publishToQueue } from "./setupRabbit";

export function deleteStory(storyGuid: String) {
  // Get the QueueManager instance and set up the queue
  const queueManager = QueueManager.getInstance();

  // Get the channel from the QueueManager instance
  const channel = queueManager.getChannel("delete_story");

  // Pass the channel as the second argument to publishToQueue
  if (channel) {
    publishToQueue(storyGuid, channel, "delete_story");
  } else {
    console.error("Failed to get channel for delete_story");
  }
}