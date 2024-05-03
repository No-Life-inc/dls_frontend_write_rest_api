import express from 'express';
import { Story } from '../entities/entities/Story';
import { StoryInfo } from '../entities/entities/StoryInfo';
import { User } from '../entities/entities/User';
import { getRepository } from 'typeorm';
import publishNewStory from '../rabbitMQ/publishNewStory';
import { Body, Post, Delete, Route, Path, Put } from 'tsoa';
import { HttpError } from 'routing-controllers';
import { updateStoryInfo } from '../rabbitMQ/updateStoryInfo';
import { StoryDTO } from '../entities/DTOs/StoryDTO';
import {deleteStory} from '../rabbitMQ/deleteStory';
import { CreateStoryDTO } from '../entities/interfaces/CreateStoryDTO';

const router = express.Router();
// TODO: Get Ropository from TypeORM is deprecated, use getCustomRepository instead
// TODO: Use DTOs instead of Entities (Maybe)
@Route('/stories')
export class StoriesController {
  @Post()
  public async createStory(@Body() requestBody: CreateStoryDTO): Promise<StoryDTO> {
    console.log('Request body:', requestBody); // Log the request body
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { userGuid: requestBody.user.userGuid }, relations: ['userInfos']});

    if (!user) {
      throw new HttpError(400, 'User not found');
    }

    const storyRepository = getRepository(Story);
    let newStory = new Story();
    //insert the data from the request body into the newStory object
    
    newStory.storyGuid = requestBody.storyGuid;
    newStory.createdAt = new Date();
    newStory.user = user;
    let newStoryInfo = new StoryInfo();
    newStoryInfo.title = requestBody.storyInfo.title;
    newStoryInfo.bodyText = requestBody.storyInfo.bodyText;
    newStoryInfo.imgUrl = requestBody.storyInfo.imgUrl;
    newStoryInfo.createdAt = new Date();
    newStoryInfo.story = newStory; // Set the story
    newStory.storyInfos = [newStoryInfo];

    try {
      await storyRepository.save(newStory);
    } catch (error) {
      throw new HttpError(400, 'Failed to create story');
    }
    
    const storyDTO = new StoryDTO(newStory)

    publishNewStory(storyDTO);
    return storyDTO;
  }

  @Delete('{storyGuid}')
  public async deleteStory(@Path() storyGuid: string): Promise<any> {
    const storyRepository = getRepository(Story);
    const story = await storyRepository.findOne({ where: { storyGuid: storyGuid }});

    if (!story) {
      throw new Error('Story not found');
    }

    // Delete the story
    await storyRepository.remove(story);

    // Publish the delete event to the queue
    deleteStory(storyGuid);
  }

  @Put('{storyGuid}')
  public async updateStory(@Path() storyGuid: string, @Body() storyData: { storyInfo: Partial<StoryInfo> }): Promise<any> {
    const storyRepository = getRepository(Story);
    const story = await storyRepository.findOne({ where: { storyGuid: storyGuid }, relations: ['storyInfos', 'user', 'user.userInfos']});
  
    if (!story) {
      throw new Error('Story not found');
    }
  
    // Update the storyInfo
    const newStoryInfo = Object.assign(new StoryInfo(), storyData.storyInfo);
    newStoryInfo.story = story; // Set the story
    newStoryInfo.createdAt = new Date();
    story.storyInfos.push(newStoryInfo);

    
    // Save the story
    const updatedStory = await storyRepository.save(story);
  
    // Convert the updated story to a StoryDTO
    const storyDTO = new StoryDTO(updatedStory);
  
    updateStoryInfo(storyGuid, storyDTO.storyInfo);
    return storyDTO;
  }
}

export default router;
