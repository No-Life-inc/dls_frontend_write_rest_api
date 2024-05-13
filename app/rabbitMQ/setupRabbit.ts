import amqp from 'amqplib/callback_api';
import { Channel } from 'amqplib/callback_api';
import { config } from 'dotenv';

config();

/***
 * RabbitMQ configuration
 */
const RABBIT_URL = process.env.RABBITURL;
const RABBIT_USER = process.env.RABBITUSER;
const RABBIT_PW = process.env.RABBITPW;

/***
 * RabbitMQ configuration
 */
const AMQP_URL = `amqp://${RABBIT_USER}:${RABBIT_PW}@${RABBIT_URL}`;

/**
 * Singleton class to manage RabbitMQ channels
 */
export class QueueManager {
  private static instance: QueueManager;
  private channels: Record<string, Channel> = {};

  private constructor() {}

  /**
   * Gets the singleton instance of the QueueManager.
   * @returns {QueueManager} The QueueManager instance.
   */
  static getInstance(): QueueManager {
    if (!QueueManager.instance) {
      QueueManager.instance = new QueueManager();
    }

    return QueueManager.instance;
  }

  /**
   * Sets up a RabbitMQ queue with the specified name.
   * @param {string} queueName - The name of the queue to set up.
   * @returns {Promise<Channel>} - A promise that resolves to a RabbitMQ channel.
   */
  async setupQueue(queueName: string): Promise<Channel> {
    return new Promise<Channel>((resolve, reject) => {
      amqp.connect(AMQP_URL, (error0, connection) => {
        if (error0) {
          console.error('Failed to connect to RabbitMQ:', error0);
          reject(error0);
          return;
        }

        connection.createChannel((error1, ch) => {
          if (error1) {
            console.error('Failed to create a channel:', error1);
            reject(error1);
            return;
          }

          ch.assertQueue(queueName, { durable: true });
          this.channels[queueName] = ch;

          resolve(ch);
        });
      });
    });
  }

  /**
   * Gets a RabbitMQ channel by its name.
   * @param {string} queueName - The name of the queue associated with the channel.
   * @returns {Channel | undefined} - The RabbitMQ channel, or undefined if not found.
   */
  getChannel(queueName: string): Channel | undefined {
    return this.channels[queueName];
  }
}

/***
 * Publishes a message to the specified queue.
 * @param {any} message - The message to publish.
 * @param {Channel} channel - The RabbitMQ channel to use for publishing.
 * @param {string} queueName - The name of the queue to publish to.
 * @returns {void}
 */
export function publishToQueue(message: any, channel: Channel | null = null, queueName: string): void {
  if (!channel) {
    console.error('RabbitMQ channel is not set up. Call setupRabbitMQ first.');
    return;
  }

  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), { persistent: true });
}
