import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Data Transfer Object (DTO) for creating a story.
 * 
 * This DTO is used when creating a new story.
 * 
 * @remarks
 * This DTO includes the story GUID, creation date, user who created the story,
 * and information about the story such as title, body text, and image URL.
 * 
 * @param {string} storyGuid - The GUID of the story.
 * @param {Date} createdAt - The date the story was created.
 * @param {CreateStoryDTOUser} user - The user who created the story.
 * @param {CreateStoryDTOStoryInfo} storyInfo - Information about the story.
 * @returns void
 */
export class CreateStoryDTO {
  /**
   * The GUID of the story.
   * @type {string}
   */
  @IsString()
  @IsNotEmpty()
  storyGuid: string;

  /**
   * The date the story was created.
   * @type {Date}
   */
  @IsNotEmpty()
  createdAt: Date;

  /**
   * The user who created the story.
   * @type {CreateStoryDTOUser}
   * @nested
   */
  @ValidateNested()
  @Type(() => CreateStoryDTOUser)
  user: CreateStoryDTOUser;

  /**
   * Information about the story.
   * @type {CreateStoryDTOStoryInfo}
   * @nested
   */
  @ValidateNested()
  @Type(() => CreateStoryDTOStoryInfo)
  storyInfo: CreateStoryDTOStoryInfo;
}

/**
 * Nested Data Transfer Object (DTO) for story information within CreateStoryDTO.
 */
class CreateStoryDTOStoryInfo {
  /**
   * The title of the story.
   * @type {string}
   */
  @IsString()
  @IsNotEmpty()
  title: string;

  /**
   * The body text of the story.
   * @type {string}
   */
  @IsString()
  @IsNotEmpty()
  bodyText: string;

  /**
   * The URL of the image associated with the story.
   * @type {string}
   */
  @IsString()
  @IsNotEmpty()
  imgUrl: string;
}

/**
 * Nested Data Transfer Object (DTO) for user information within CreateStoryDTO.
 */
class CreateStoryDTOUser {
  /**
   * The GUID of the user.
   * @type {string}
   */
  @IsString()
  @IsNotEmpty()
  userGuid: string;
}