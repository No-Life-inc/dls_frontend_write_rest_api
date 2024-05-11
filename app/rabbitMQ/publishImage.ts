import { Express } from 'express';
import { publishToQueue } from "./setupRabbit";
import { QueueManager } from "./setupRabbit"; // Import setupQueue
import fs from 'fs';

/**
 * Function to publish a new image to the RabbitMQ queue
 * @param image - The base64 string of the image to publish
 * @param filename - The name of the image file
 * @param fileType - The type of the image file
 * @returns void
 */
export function publishImage(image: string, filename: string, fileType: string) {
  // Get the QueueManager instance and set up the queue
  const queueManager = QueueManager.getInstance();

  // Get the channel from the QueueManager instance
  const channel = queueManager.getChannel("new_images");

  // Pass the channel as the second argument to publishToQueue
  if (channel) {
    // Create an object with the image data, filename, and fileType
    const imageData = {
      image,
      filename,
      fileType
    };

    // Convert the object to a string
    const imageString = JSON.stringify(imageData);

    publishToQueue(imageString, channel, "new_images");
  } else {
    console.error("Failed to get channel for new_images");
  }
}

// Export the function
export default publishImage;