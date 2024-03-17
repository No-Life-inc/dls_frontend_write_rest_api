import express from 'express';
import cors from 'cors';
import { connectToDb } from './db/dbConnect';
import { setupRabbitMQ } from './rabbitMQ/setupRabbit';
import { RegisterRoutes } from './routes/routes';
import { config } from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../dist/swagger.json';
import { createConnection } from 'typeorm';


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

// TODO: createConnection is deprecated, What else can be used?
// TODO: ormconfig.json has to use the environment variables
createConnection().then(async connection => {
  // Your previous setup code here
  RegisterRoutes(app);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => console.log(error));