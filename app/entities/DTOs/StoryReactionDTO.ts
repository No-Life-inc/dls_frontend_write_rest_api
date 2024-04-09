import { IsInt } from 'class-validator';

export class StoryReactionDTO {
  @IsInt()
  storyId: number;

  @IsInt()
  reactionId: number;

  constructor(storyId: number, reactionId: number) {
    this.storyId = storyId;
    this.reactionId = reactionId;
  }
}