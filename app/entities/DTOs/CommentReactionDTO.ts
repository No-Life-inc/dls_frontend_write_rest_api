import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentsDTO } from './CommentDTO';
import { ReactionsDTO } from './ReactionDTO';

export class CommentReactionDTO {
  @IsOptional()
  commentReactionId: number;

  @ValidateNested()
  @Type(() => CommentsDTO)
  comment: CommentsDTO;

  @ValidateNested()
  @Type(() => ReactionsDTO)
  reaction: ReactionsDTO;

  constructor(commentReactionId: number, comment: CommentsDTO, reaction: ReactionsDTO) {
    this.commentReactionId = commentReactionId;
    this.comment = comment;
    this.reaction = reaction;
  }
}