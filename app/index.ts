import express from 'express';
import cors from 'cors';
import { QueueManager } from './rabbitMQ/setupRabbit';
import { RegisterRoutes } from './routes/routes';
import { config } from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "../dist/swagger.json";
import { createConnection } from 'typeorm';
import {expressjwt} from "express-jwt"
import jwt from "jsonwebtoken"


/***
 * Load environment variables from a .env file into process.env
 */
config();
declare global {
  namespace Express {
    interface Request {
      userGuid?: string;
    }
  }
}

const PORT = process.env.PORT || 3000;


const app = express();
const router = express.Router();
app.use(cors({ origin: 'http://localhost:8080' }));

/***
 * Middleware to parse the request body as JSON
 */
app.use(express.json());


// Get the QueueManager instance and set up the queue
const queueManager = QueueManager.getInstance();
queueManager.setupQueue('new_stories').then((ch) => {
  console.log('RabbitMQ new_stories setup completed');
}).catch(err => {
  console.error('Failed to setup RabbitMQ', err);
});

queueManager.setupQueue('update_story_info').then((ch) => {
  console.log('RabbitMQ update_story_info setup completed');
}).catch(err => {
  console.error('Failed to setup RabbitMQ', err);
});

queueManager.setupQueue('new_comments').then((ch) => {
    console.log('RabbitMQ new_comment setup completed');
}).catch(err => {
    console.error('Failed to setup RabbitMQ', err);
});

queueManager.setupQueue('delete_story').then((ch) => {
  console.log('RabbitMQ delete_story setup completed');
}).catch(err => {
  console.error('Failed to setup RabbitMQ', err);
});

// TODO: createConnection is deprecated, What else can be used?
// TODO: ormconfig.json has to use the environment variables
 createConnection().then(async connection => {
  // Your previous setup code here
  RegisterRoutes(router);
  app.use('/v1', router);

  app.use('/v1',expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
}).unless({ path: ["/api-docs"] }), (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized: Missing token" });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as {userGUID: string};
        req.userGuid = decodedToken.userGUID;
        console.log("This is the decoded token:",decodedToken)
        next();
    } catch (error) {
        console.error("Error decoding token:", error);
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
});

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => console.log(error));

// connectDB.initialize().then(async () => {
//   RegisterRoutes(app);
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//   app.listen(3000, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });