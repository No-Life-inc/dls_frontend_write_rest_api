import { IsInt } from 'class-validator';
import { StoryReaction } from '../entities/StoryReaction';

export class StoryReactionDTO {
  @IsInt()
  storyId: number;

  @IsInt()
  reactionId: number;

  constructor(storyReaction: StoryReaction) {
    this.storyId = storyReaction.story.storyId;
    this.reactionId = storyReaction.reaction.reactionId;
  }
}