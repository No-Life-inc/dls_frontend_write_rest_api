import express from 'express';
import { Stories } from '../entities/entities/Stories';
import { Users } from '../entities/entities/Users';
import { getRepository } from 'typeorm';
import publishNewStory from '../rabbitMQ/publishNewStory';
import { Body, Post, Route } from 'tsoa';
import { HttpError } from 'routing-controllers';
import { CreateStoryDTO } from '../entities/DTOs/createStoryDTO';
import { getConnection } from 'typeorm';

const router = express.Router();

// TODO: Get Ropository from TypeORM is deprecated, use getCustomRepository instead
// TODO: Use DTOs instead of Entities (Maybe)
@Route('/stories')
export class StoriesController {
  @Post()
  public async createStory(@Body() requestBody: CreateStoryDTO): Promise<Stories> {
    console.log('Request body:', requestBody); // Log the request body
    const userRepository = getRepository(Users);
    const user = await userRepository.findOne({ where: { userGuid: requestBody.user.userGuid } });

    if (!user) {
      throw new HttpError(400, 'User not found');
    }

    const storyRepository = getRepository(Stories);
    let newStory = new Stories(requestBody);
    newStory.user = user;
  
    try {
      await storyRepository.save(newStory);
    } catch (error) {
      throw new HttpError(400, 'Failed to create story');
    }
  
    publishNewStory(newStory);
    return newStory;
  }
}

export default router;
