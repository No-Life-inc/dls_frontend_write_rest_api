import amqp from 'amqplib/callback_api';
import { Channel } from 'amqplib/callback_api';
import { config } from 'dotenv';

config();

/***
 * RabbitMQ configuration
 */
const RABBIT_URL = process.env.RABBITURL
const RABBIT_USER = process.env.RABBITUSER
const RABBIT_PW = process.env.RABBITPW

/***
 * RabbitMQ configuration
 */
const AMQP_URL = `amqp://${RABBIT_USER}:${RABBIT_PW}@${RABBIT_URL}`;


/**
 * Singleton class to manage RabbitMQ channels
 * @param {string} queueName - The name of the queue to set up
 * @returns {Promise<Channel>} - A promise that resolves to a RabbitMQ channel
 */


export class QueueManager {
  private static instance: QueueManager;
  private channels: Record<string, Channel> = {};

  private constructor() {}

  static getInstance(): QueueManager {
    if (!QueueManager.instance) {
      QueueManager.instance = new QueueManager();
    }

    return QueueManager.instance;
  }

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

  getChannel(queueName: string): Channel | undefined {
    return this.channels[queueName];
  }
}

/***
 * Publish a message to the queue
 */

export function publishToQueue(message: any, channel: any = null, queueName: string) {

  if (!channel) {
    console.error('RabbitMQ channel is not set up. Call setupRabbitMQ first.');
    return;
  }

  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), { persistent: true });
}
