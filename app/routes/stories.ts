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
import { Request } from 'tsoa';

const router = express.Router();
// TODO: Get Ropository from TypeORM is deprecated, use getCustomRepository instead
// TODO: Use DTOs instead of Entities (Maybe)
/**
 * Controller for handling story-related endpoints.
 */
@Route('/stories')
export class StoriesController {
   /**
   * Endpoint to create a new story.
   * 
   * @param {CreateStoryDTO} requestBody - The request body containing the story data.
   * @param {Request} req - The request object.
   * @returns {Promise<StoryDTO>} A Promise resolving to the created story DTO.
   */
  @Post()
  public async createStory(@Body() requestBody: CreateStoryDTO, @Request() req: any): Promise<StoryDTO> {
    console.log(req.userGuid)
    const userGuid = req.userGuid;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { userGuid: userGuid }, relations: ['userInfos']});

    if (!user) {
      throw new HttpError(400, 'User not found');
    }

    const storyRepository = getRepository(Story);
    let newStory = new Story();
    //insert the data from the request body into the newStory object
    
    newStory.storyGuid = requestBody.storyGuid;
    newStory.createdAt = new Date();
    newStory.user = user;
    newStory.comments = []; // Initialize the comments field to an empty array
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

  /**
   * Endpoint to delete a story by its GUID.
   * 
   * @param {string} storyGuid - The GUID of the story to delete.
   * @returns {Promise<any>} A Promise resolving to the result of the deletion.
   */
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

  /**
   * Endpoint to update a story by its GUID.
   * 
   * @param {string} storyGuid - The GUID of the story to update.
   * @param {{ storyInfo: Partial<StoryInfo> }} storyData - The data to update the story with.
   * @returns {Promise<any>} A Promise resolving to the updated story DTO.
   */
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
