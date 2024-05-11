import { Express } from 'express';
import { publishToQueue } from "./setupRabbit";
import { QueueManager } from "./setupRabbit"; // Import setupQueue
import fs from 'fs';

/**
 * Function to publish a new image to the RabbitMQ queue
 * @param image - The image to publish
 * @returns void
 */
export function publishImage(image: Express.Multer.File) {
  // Get the QueueManager instance and set up the queue
  const queueManager = QueueManager.getInstance();

  // Get the channel from the QueueManager instance
  const channel = queueManager.getChannel("new_images");

  // Pass the channel as the second argument to publishToQueue
  if (channel) {
    // Convert the image file to a Buffer and then to a string
    const imageBuffer = fs.readFileSync(image.path);
    const imageString = imageBuffer.toString('base64');

    publishToQueue(imageString, channel, "new_images");
  } else {
    console.error("Failed to get channel for new_images");
  }
}

// Export the function
export default publishImage;