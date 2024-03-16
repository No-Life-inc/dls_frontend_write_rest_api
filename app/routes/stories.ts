import express from 'express';
import { Stories } from '../entities/entities/Stories';
import { Users } from '../entities/entities/Users';
import { getRepository } from 'typeorm';
import { publishToQueue } from '../rabbitMQ/setupRabbit';
import { Body, Post, SuccessResponse, Route } from 'tsoa';
import { insertStory, getUserById } from '../db/dbOperations';
import { HttpError } from 'routing-controllers';

const router = express.Router();

@Route('/stories')
export class StoriesController {
  @Post()
  public async createStory(@Body() requestBody: Stories): Promise<Stories> {
    const userRepository = getRepository(Users);
    const user = await userRepository.findOne({ where: { userGuid: requestBody.user.userGuid } });

    if (!user) {
      throw new HttpError(400, 'User not found');
    }

    const storyRepository = getRepository(Stories);
    const story = new Stories();

    // Copy over all the fields from requestBody to story
    Object.assign(story, requestBody);

    // Set the user field on the story
    story.user = user;
  
    try {
      await storyRepository.save(story);
    } catch (error) {
      throw new HttpError(400, 'Failed to create story');
    }
  
    publishToQueue(story);
    return story;
  }
}

export default router;
