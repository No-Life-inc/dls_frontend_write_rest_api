import { IsInt } from 'class-validator';
import { StoryReaction } from '../entities/StoryReaction';

/**
 * Data Transfer Object (DTO) for StoryReaction entity.
 * 
 * This DTO is used to transfer data related to a StoryReaction entity.
 * 
 * @remarks
 * This DTO contains information about a story reaction, including its ID and the ID
 * of the reaction associated with it.
 */
export class StoryReactionDTO {
  /**
   * The ID of the story.
   * @type {number}
   */
  @IsInt()
  storyId: number;

  /**
   * The ID of the reaction associated with the story.
   * @type {number}
   */
  @IsInt()
  reactionId: number;

  /**
   * Constructor for StoryReactionDTO.
   * @param {StoryReaction} storyReaction - The StoryReaction entity to create DTO from.
   */
  constructor(storyReaction: StoryReaction) {
    // this.storyId = storyReaction.story.storyId;
    this.reactionId = storyReaction.reaction.reactionId;
  }
}