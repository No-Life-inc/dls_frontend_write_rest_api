import { IsString, IsOptional, IsDate, IsInt } from 'class-validator';
import { StoryInfo } from '../entities/StoryInfo';

/**
 * Data Transfer Object (DTO) for StoryInfo entity.
 * 
 * This DTO is used to transfer data related to a StoryInfo entity.
 * 
 * @remarks
 * This DTO contains information about a story, including its title, body text,
 * image URL, creation date, and ID.
 */
export class StoryInfoDTO {
  /**
   * The title of the story.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  title: string;

  /**
   * The body text of the story.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  bodyText: string;

  /**
   * The URL of the image associated with the story.
   * @type {string | null}
   * @optional
   */
  @IsString()
  @IsOptional()
  imgUrl: string | null;

  /**
   * The creation date of the story.
   * @type {Date}
   * @optional
   */
  @IsDate()
  @IsOptional()
  createdAt: Date;

  /**
   * The ID of the story.
   * @type {number}
   */
  @IsInt()
  storyId: number;

  /**
   * Constructor for StoryInfoDTO.
   * @param {StoryInfo} storyInfo - The StoryInfo entity to create DTO from.
   */
  constructor(storyInfo: StoryInfo) {
    this.title = storyInfo.title;
    this.bodyText = storyInfo.bodyText;
    this.imgUrl = storyInfo.imgUrl;
    this.createdAt = storyInfo.createdAt;
    // this.storyId = storyInfo.storyInfoId;
  }
}