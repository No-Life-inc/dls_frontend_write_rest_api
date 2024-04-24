import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentDTO } from './CommentDTO';
import { ReactionDTO } from './ReactionDTO';
import { CommentReaction } from '../entities/CommentReaction';

export class CommentReactionDTO {
  @IsOptional()
  commentReactionId: number;

  @ValidateNested()
  @Type(() => CommentDTO)
  comment: CommentDTO;

  @ValidateNested()
  @Type(() => ReactionDTO)
  reaction: ReactionDTO;

  constructor(commentReaction: CommentReaction) {
    // this.commentReactionId = commentReaction.commentReactionId;
    this.comment = new CommentDTO(commentReaction.comment);
    this.reaction = new ReactionDTO(commentReaction.reaction);
  }
}