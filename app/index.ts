import express from 'express';
import sql from 'mssql';
import cors from 'cors';
import { connectToDb } from './db/dbConnect';
import { setupRabbitMQ, publishToQueue } from './rabbitMQ/setupRabbit';

const app = express();
app.use(cors({ origin: 'http://localhost:8080' }));
 
// Use express.json() middleware to parse JSON payloads
app.use(express.json());

const PORT = 3000;

setupRabbitMQ().then(() => {
  console.log('RabbitMQ setup completed');
}).catch(err => {
  console.error('Failed to setup RabbitMQ', err);
});

connectToDb().then(pool => {
    // POST endpoint for creating a new story
    app.post('/stories', async (req, res) => {
        try {
            console.log('Request received', req.body);
          const { story_guid, title, body_text, img_url, user_guid } = req.body;
      
          const created_at = new Date();
      
          // First, get the user_id for the provided user_guid
          const user = await pool.request()
            .input('user_guid', sql.UniqueIdentifier, user_guid)
            .query('SELECT user_id, first_name, last_name FROM users WHERE user_guid = @user_guid');
      
          if (user.recordset.length === 0) {
            return res.status(404).send({ message: 'User not found' });
          }
      
          const user_id = user.recordset[0].user_id;
          const userObject = {
            user_guid: user.recordset[0].user_guid,
            first_name: `${user.recordset[0].name}`,
            last_name: `${user.recordset[0].last_name}`
          };
      
          // Then, insert the new story
          const result = await pool.request()
            .input('story_guid', sql.UniqueIdentifier, story_guid)
            .input('title', sql.NVarChar(255), title)
            .input('body_text', sql.NVarChar(sql.MAX), body_text)
            .input('img_url', sql.NVarChar(255), img_url)
            .input('created_at', sql.DateTime, created_at)
            .input('user_id', sql.Int, user_id)
            .query('INSERT INTO stories (story_guid, title, body_text, img_url, created_at, user_id) VALUES (@story_guid, @title, @body_text, @img_url, @created_at, @user_id)');
          
          // If the database operation was successful, publish a message to the queue
          if (result.rowsAffected[0] > 0) {
            const message = { story_guid, title, body_text, img_url, created_at, user: userObject};
            publishToQueue(message);
          }

          res.status(201).send(result);
        } catch (err) {
          console.error('SQL error', err);
          res.status(500).send({ message: 'Server error' });
        }
      });
  
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  }).catch(err => {
    console.error('Database connection failed', err);
  });