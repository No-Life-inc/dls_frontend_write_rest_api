import express from 'express';
import { Stories } from '../entities/entities/Stories';
import { StoryInfo } from '../entities/entities/StoryInfo';
import { Users } from '../entities/entities/Users';
import { getRepository } from 'typeorm';
import publishNewStory from '../rabbitMQ/publishNewStory';
import { Body, Post, Route, Path, Put } from 'tsoa';
import { HttpError } from 'routing-controllers';
import { CreateStoryDTO } from '../entities/DTOs/createStoryDTO';
import { getConnection } from 'typeorm';
import { updateStoryInfo } from '../rabbitMQ/updateStoryInfo';

const router = express.Router();

// TODO: Get Ropository from TypeORM is deprecated, use getCustomRepository instead
// TODO: Use DTOs instead of Entities (Maybe)
@Route('/stories')
export class StoriesController {
  @Post()
  public async createStory(@Body() requestBody: CreateStoryDTO): Promise<Stories> {
    console.log('Request body:', requestBody); // Log the request body
    const userRepository = getRepository(Users);
    const user = await userRepository.findOne({ where: { userGuid: requestBody.user.userGuid }, relations: ['userInfos']});

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

  @Put('{storyGuid}')
public async updateStory(@Path() storyGuid: string, @Body() storyData: { storyInfos: Partial<StoryInfo>[] }): Promise<any> {
  const storyRepository = getRepository(Stories);
  const story = await storyRepository.findOne({ where: { storyGuid: storyGuid }, relations: ['storyInfos', 'user', 'user.userInfos']});

  if (!story) {
    throw new Error('Story not found');
  }

  // Update the storyInfos
  const newStoryInfos = storyData.storyInfos.map((info) => {
    const storyInfo = Object.assign(new StoryInfo(), info);
    storyInfo.story = story; // Set the story
    return storyInfo;
  });

  // Append the new StoryInfos to the existing ones
  story.storyInfos.push(...newStoryInfos);
  
  // Save the story
  const updatedStory = await storyRepository.save(story);

  // Take the latest storyInfo
const latestStoryInfo = updatedStory.storyInfos[updatedStory.storyInfos.length - 1];
const latestUserInfo = updatedStory.user.userInfos[updatedStory.user.userInfos.length - 1];

// Create a new object with only the properties you want to return
const response = {
  storyGuid: updatedStory.storyGuid,
  user: {
    userGuid: updatedStory.user.userGuid,
    userInfo: updatedStory.user && updatedStory.user.userInfos && updatedStory.user.userInfos.length > 0 ? {
      firstName: latestUserInfo.firstName,
      lastName: latestUserInfo.lastName,
      imgUrl: latestUserInfo.imgUrl,
      createdAt: latestUserInfo.createdAt,
    } : null,
  },
  storyInfo: {
    title: latestStoryInfo.title,
    bodyText: latestStoryInfo.bodyText,
    imgUrl: latestStoryInfo.imgUrl,
  },
};

updateStoryInfo(storyGuid, response.storyInfo);
return response;

}
}

export default router;
