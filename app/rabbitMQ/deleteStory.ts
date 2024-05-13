import { QueueManager, publishToQueue } from "./setupRabbit";

/**
 * Deletes a story by publishing a message to the RabbitMQ queue for processing.
 * 
 * @remarks
 * This function publishes a message containing the story GUID to the RabbitMQ queue named "delete_story".
 * 
 * @param {string} storyGuid - The GUID of the story to be deleted.
 * @returns {void}
 */
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