import { IsString, IsOptional } from 'class-validator';
import { ReactionType } from '../entities/ReactionType';

export class ReactionTypeDTO {
  @IsString()
  @IsOptional()
  reactionTypeName: string;

  @IsString()
  @IsOptional()
  reactionTypeImg: string;

  constructor(reactionType: ReactionType) {
    this.reactionTypeName = reactionType.reactionTypeName;
    this.reactionTypeImg = reactionType.reactionTypeImg;
  }
}