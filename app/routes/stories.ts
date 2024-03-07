import express from 'express';
import { publishToQueue } from '../rabbitMQ/setupRabbit';
import { getUserById, insertStory } from '../db/dbOperations';

const router = express.Router();

// POST endpoint for creating a new story

router.post('/', async (req, res) => {
    try {

        const pool = req.app.locals.pool;

        console.log('Request received', req.body);
      const { story_guid, title, body_text, img_url, user_guid } = req.body;
  
      const created_at = new Date();
  
      // First, get the user_id for the provided user_guid
      const user = await getUserById(pool, user_guid);
  
      if (user.recordset.length === 0) {
        return res.status(404).send({ message: 'User not found' });
      }
  
      const user_id = user.recordset[0].user_id;
      const userObject = {
        _id: user.recordset[0].user_guid,
        first_name: `${user.recordset[0].first_name}`,
        last_name: `${user.recordset[0].last_name}`,
        img_url: `${user.recordset[0].img_url}`
      };
  
      // Then, insert the new story
      const result = await insertStory(pool, story_guid, title, body_text, img_url, created_at, user_id);

      // If the database operation was successful, publish a message to the queue
      if (result.rowsAffected[0] > 0) {
        const message = { 
            _id: story_guid, // Change 'story_guid' to 'id'
            title, 
            body_text, 
            img_url, 
            created_at, 
            user: userObject
          };
        publishToQueue(message);

          // Send a response back to the client
        res.status(201).send({ message: 'Story created successfully' });
        } else {
        // If the database operation was not successful, send an error response
        res.status(500).send({ message: 'Failed to create story' });
      } 
      
    }
    catch (err) {
        console.error('SQL error', err);
        res.status(500).send({ message: 'Server error' });
      };
    }
    );

export default router;