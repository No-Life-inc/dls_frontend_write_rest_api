import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentDTO } from './CommentDTO';
import { ReactionDTO } from './ReactionDTO';

export class CommentReactionDTO {
  @IsOptional()
  commentReactionId: number;

  @ValidateNested()
  @Type(() => CommentDTO)
  comment: CommentDTO;

  @ValidateNested()
  @Type(() => ReactionDTO)
  reaction: ReactionDTO;

  constructor(commentReactionId: number, comment: CommentDTO, reaction: ReactionDTO) {
    this.commentReactionId = commentReactionId;
    this.comment = comment;
    this.reaction = reaction;
  }
}