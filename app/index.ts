import express from 'express';
import cors from 'cors';
import { connectToDb } from './db/dbConnect';
import { setupRabbitMQ, publishToQueue } from './rabbitMQ/setupRabbit';
import storiesRouter from './routes/stories';
import { config } from 'dotenv';

/***
 * Load environment variables from a .env file into process.env
 */
config();

const PORT = process.env.PORT || 3000;

/***
 * Create an instance of express
 */
const app = express();
app.use(cors({ origin: 'http://localhost:8080' }));

/***
 * Middleware to parse the request body as JSON
 */
app.use(express.json());


setupRabbitMQ().then(() => {
  console.log('RabbitMQ setup completed');
}).catch(err => {
  console.error('Failed to setup RabbitMQ', err);
});

connectToDb().then(pool => {
  // Attach the pool object to app.locals
  app.locals.pool = pool;

  // Import your routes here
  app.use('/stories', storiesRouter);

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch(err => {
  console.error('Database connection failed', err);
});