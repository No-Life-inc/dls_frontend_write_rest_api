import amqp from 'amqplib/callback_api';

const AMQP_URL = 'amqp://user:password@localhost';

export function setupRabbitMQ() {
  return new Promise<void>((resolve, reject) => {
    amqp.connect(AMQP_URL, (error0, connection) => {
      if (error0) {
        reject(error0);
        throw error0;
      }

      connection.createChannel((error1, channel) => {
        if (error1) {
          reject(error1);
        }

        const queueName = 'new_stories';

        channel.assertQueue(queueName, { durable: false });

        resolve();
      });
    });
  });
}

export function publishToQueue(message: any) {
  amqp.connect(AMQP_URL, (error0, connection) => {
    if (error0) {
      throw error0;
    }

    connection.createChannel((error1, channel) => {
      if (error1) {
        throw error1;
      }

      const queueName = 'new_stories';

      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    });
  });
}