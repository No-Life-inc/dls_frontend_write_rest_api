import { IsString, IsOptional, IsDate, IsInt } from 'class-validator';

export class StoryInfoDTO {
  @IsString()
  @IsOptional()
  title: string | null;

  @IsString()
  @IsOptional()
  bodyText: string | null;

  @IsString()
  @IsOptional()
  imgUrl: string | null;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsInt()
  storyId: number;

  constructor(title: string | null, bodyText: string | null, imgUrl: string | null, createdAt: Date, storyId: number) {
    this.title = title;
    this.bodyText = bodyText;
    this.imgUrl = imgUrl;
    this.createdAt = createdAt;
    this.storyId = storyId;
  }
}