import { IsString, IsOptional, IsDate, IsInt } from 'class-validator';
import { StoryInfo } from '../entities/StoryInfo';

export class StoryInfoDTO {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  bodyText: string;

  @IsString()
  @IsOptional()
  imgUrl: string | null;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsInt()
  storyId: number;

  constructor(storyInfo: StoryInfo) {
    this.title = storyInfo.title;
    this.bodyText = storyInfo.bodyText;
    this.imgUrl = storyInfo.imgUrl;
    this.createdAt = storyInfo.createdAt;
    // this.storyId = storyInfo.storyInfoId;
  }
}