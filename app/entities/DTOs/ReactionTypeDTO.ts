import { IsString, IsOptional } from 'class-validator';

export class ReactionTypeDTO {
  @IsString()
  @IsOptional()
  reactionTypeName: string | null;

  @IsString()
  @IsOptional()
  reactionTypeImg: string | null;

  constructor(reactionTypeName: string | null, reactionTypeImg: string | null) {
    this.reactionTypeName = reactionTypeName;
    this.reactionTypeImg = reactionTypeImg;
  }
}