import { IsInt, IsOptional } from 'class-validator';
import { Reaction } from '../entities/Reaction';

export class ReactionDTO {
  @IsInt()
  @IsOptional()
  userId: number;

  @IsInt()
  @IsOptional()
  storyId: number;

  @IsInt()
  @IsOptional()
  reactionTypeId: number;

  constructor(reaction: Reaction) {
    this.userId = reaction.user.userId;
    this.storyId = reaction.story.storyId;
    this.reactionTypeId = reaction.reactionType.reactionTypeId;
  }
}