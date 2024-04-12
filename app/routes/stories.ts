import express from 'express';
import { Story } from '../entities/entities/Story';
import { StoryInfo } from '../entities/entities/StoryInfo';
import { User } from '../entities/entities/User';
import { getRepository } from 'typeorm';
import publishNewStory from '../rabbitMQ/publishNewStory';
import { Body, Post, Route, Path, Put } from 'tsoa';
import { HttpError } from 'routing-controllers';
import { updateStoryInfo } from '../rabbitMQ/updateStoryInfo';
import { StoryDTO } from '../entities/DTOs/StoryDTO';

const router = express.Router();

// TODO: Get Ropository from TypeORM is deprecated, use getCustomRepository instead
// TODO: Use DTOs instead of Entities (Maybe)
@Route('/stories')
export class StoriesController {
  @Post()
  public async createStory(@Body() requestBody: StoryDTO): Promise<StoryDTO> {
    console.log('Request body:', requestBody); // Log the request body
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { userGuid: requestBody.user.userGuid }, relations: ['userInfos']});

    if (!user) {
      throw new HttpError(400, 'User not found');
    }

    const storyRepository = getRepository(Story);
    let newStory = new Story(requestBody);
    newStory.user = user;
  
    try {
      await storyRepository.save(newStory);
    } catch (error) {
      throw new HttpError(400, 'Failed to create story');
    }
  
    publishNewStory(newStory);
    return new StoryDTO(newStory);
  }

  @Put('{storyGuid}')
public async updateStory(@Path() storyGuid: string, @Body() storyData: { storyInfos: Partial<StoryInfo>[] }): Promise<any> {
  const storyRepository = getRepository(Story);
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
