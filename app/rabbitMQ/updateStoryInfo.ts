import { Stories } from "../entities/entities/Stories";
import { StoryInfo } from "../entities/entities/StoryInfo";
import { publishToQueue } from "./setupRabbit";
import { QueueManager } from "./setupRabbit"; // Import setupQueue

// Get the QueueManager instance and set up the queue
const queueManager = QueueManager.getInstance();
// queueManager
//   .setupQueue("update_story_info")
//   .then((ch) => {
//     console.log("RabbitMQ setup completed");
//   })
//   .catch((err) => {
//     console.error("Failed to setup RabbitMQ", err);
//   });


  export function updateStoryInfo(storyGuid: String,updatedStoryInfo: Partial<StoryInfo>) {
    const storyForMongoDB = {
        storyGuid: storyGuid,
        storyInfos: updatedStoryInfo,
        };

    // Get the channel from the QueueManager instance
    const channel = queueManager.getChannel("update_story_info");

    // Pass the channel as the second argument to publishToQueue
    if (channel) {
        publishToQueue(storyForMongoDB, channel, "update_story_info");
    } else {
        console.error("Failed to get channel for update_story_info");
    }

}