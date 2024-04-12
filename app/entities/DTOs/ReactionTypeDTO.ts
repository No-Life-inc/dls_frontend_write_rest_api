import { IsString, IsOptional } from 'class-validator';

export class ReactionTypeDTO {
  @IsString()
  @IsOptional()
  reactionTypeName: string;

  @IsString()
  @IsOptional()
  reactionTypeImg: string;

  constructor(reactionTypeName: string, reactionTypeImg: string) {
    this.reactionTypeName = reactionTypeName;
    this.reactionTypeImg = reactionTypeImg;
  }
}