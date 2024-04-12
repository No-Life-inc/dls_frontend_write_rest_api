import { IsInt, IsOptional } from 'class-validator';

export class ReactionsDTO {
  @IsInt()
  @IsOptional()
  userId: number;

  @IsInt()
  @IsOptional()
  storyId: number;

  @IsInt()
  @IsOptional()
  reactionTypeId: number;

  constructor(userId: number, storyId: number, reactionTypeId: number) {
    this.userId = userId;
    this.storyId = storyId;
    this.reactionTypeId = reactionTypeId;
  }
}