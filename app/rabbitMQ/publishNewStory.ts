import { StoryDTO } from "../entities/DTOs/StoryDTO";
import { Story } from "../entities/entities/Story";
import { publishToQueue } from "./setupRabbit";
import { QueueManager } from "./setupRabbit"; // Import setupQueue



/**
 * Function to publish a new story to the RabbitMQ queue
 * @param story - The story to publish
 * @returns void
 */
export function publishNewStory(story: StoryDTO) {
  // Get the QueueManager instance and set up the queue
  const queueManager = QueueManager.getInstance();

  // Get the channel from the QueueManager instance
  const channel = queueManager.getChannel("new_stories");

  // Pass the channel as the second argument to publishToQueue
  if (channel) {
    publishToQueue(story, channel, "new_stories");
  } else {
    console.error("Failed to get channel for new_stories");
  }
}

// Export the function
export default publishNewStory;
