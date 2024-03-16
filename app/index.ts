import express from 'express';
import cors from 'cors';
import { connectToDb } from './db/dbConnect';
import { setupRabbitMQ } from './rabbitMQ/setupRabbit';
import { RegisterRoutes } from './routes/routes';
import { config } from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../dist/swagger.json';

config();

const PORT = process.env.PORT || 3000;


const app = express();
app.use(cors({ origin: 'http://localhost:8080' }));

// Use express.json() middleware to parse JSON payloads
app.use(express.json());



setupRabbitMQ().then(() => {
  console.log('RabbitMQ setup completed');
}).catch(err => {
  console.error('Failed to setup RabbitMQ', err);
});

connectToDb().then(pool => {
  // Attach the pool object to app.locals
  app.locals.pool = pool;

  // Register tsoa routes
  RegisterRoutes(app);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch(err => {
  console.error('Database connection failed', err);
});