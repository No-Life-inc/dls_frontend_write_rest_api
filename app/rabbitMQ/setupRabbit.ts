import amqp from 'amqplib/callback_api';

const AMQP_URL = 'amqp://user:password@localhost';
const QUEUE_NAME = 'new_stories';

let channel: any = null;

export function setupRabbitMQ() {
  return new Promise<void>((resolve, reject) => {
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

        ch.assertQueue(QUEUE_NAME, { durable: true });
        channel = ch;

        resolve();
      });
    });
  });
}

export function publishToQueue(message: any) {
  if (!channel) {
    console.error('RabbitMQ channel is not set up. Call setupRabbitMQ first.');
    return;
  }

  channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(message)), { persistent: true });
}
