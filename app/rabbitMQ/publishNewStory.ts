import { Stories } from "../entities/entities/Stories";
import { publishToQueue } from "./setupRabbit";
import { QueueManager } from "./setupRabbit"; // Import setupQueue

// Get the QueueManager instance and set up the queue
const queueManager = QueueManager.getInstance();
queueManager
  .setupQueue("new_stories")
  .then((ch) => {
    console.log("RabbitMQ setup completed");
  })
  .catch((err) => {
    console.error("Failed to setup RabbitMQ", err);
  });

/**
 * Function to publish a new story to the RabbitMQ queue
 * @param story - The story to publish
 * @returns void
 */
export function publishNewStory(story: Stories) {
  // Create a new object with the desired structure
  const storyForMongoDB = {
    storyGuid: story.storyGuid,
    user: {
      userGuid: story.user.userGuid,
      userInfo: story.user.userInfos.map((info) => ({
        firstName: info.firstName,
        lastName: info.lastName,
        imgUrl: info.imgUrl,
        createdAt: info.createdAt,
      })),
    },
    createdAt: story.createdAt,
    storyInfos: story.storyInfos.map((info) => ({
      title: info.title,
      bodyText: info.bodyText,
      imgUrl: info.imgUrl,
      createdAt: info.createdAt,
    })),
  };

  // Get the channel from the QueueManager instance
  const channel = queueManager.getChannel("new_stories");

  // Pass the channel as the second argument to publishToQueue
  if (channel) {
    publishToQueue(storyForMongoDB, channel, "new_stories");
  } else {
    console.error("Failed to get channel for new_stories");
  }
}

// Export the function
export default publishNewStory;
