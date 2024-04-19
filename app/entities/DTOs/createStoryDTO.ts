import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

/**
* CreateStoryDTO
* This is the DTO for creating a story
* @param storyGuid - The GUID of the story
* @param createdAt - The date the story was created
* @param createStoryDTOUser - The user who created the story
* @param createStoryDTOStoryInfo - The information about the story
* @returns void
**/

class CreateStoryDTOStoryInfo {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  bodyText: string;

  @IsString()
  @IsNotEmpty()
  imgUrl: string;
}

class CreateStoryDTOUser {
  @IsString()
  @IsNotEmpty()
  userGuid: string;
}

export class CreateStoryDTO {
  @IsString()
  @IsNotEmpty()
  storyGuid: string;

  @IsNotEmpty()
  createdAt: Date;

  @ValidateNested()
  @Type(() => CreateStoryDTOUser)
  user: CreateStoryDTOUser;


  @ValidateNested()
  @Type(() => CreateStoryDTOStoryInfo)
  storyInfo: CreateStoryDTOStoryInfo;
}