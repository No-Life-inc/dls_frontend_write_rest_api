import { IsInt, IsOptional } from 'class-validator';
import { Reaction } from '../entities/Reaction';

/**
 * Data Transfer Object (DTO) for Reaction entity.
 * 
 * This DTO is used to transfer data related to a Reaction entity.
 * 
 * @remarks
 * This DTO contains information about a reaction, including the IDs of the user,
 * story, and reaction type associated with it.
 */
export class ReactionDTO {
  /**
   * The ID of the user who made the reaction.
   * @type {number}
   * @optional
   */
  @IsInt()
  @IsOptional()
  userId: number;

  /**
   * The ID of the story to which the reaction is made.
   * @type {number}
   * @optional
   */
  @IsInt()
  @IsOptional()
  storyId: number;

  /**
   * The ID of the reaction type.
   * @type {number}
   * @optional
   */
  @IsInt()
  @IsOptional()
  reactionTypeId: number;

  /**
   * Constructor for ReactionDTO.
   * @param {Reaction} reaction - The Reaction entity to create DTO from.
   */
  constructor(reaction: Reaction) {
    // this.userId = reaction.user.userId;
    // this.storyId = reaction.story.storyId;
    this.reactionTypeId = reaction.reactionType.reactionTypeId;
  }
}