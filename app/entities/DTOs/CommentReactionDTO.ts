import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentDTO } from './CommentDTO';
import { ReactionDTO } from './ReactionDTO';
import { CommentReaction } from '../entities/CommentReaction';

/**
 * Data Transfer Object (DTO) for CommentReaction entity.
 * 
 * This DTO is used to transfer data related to a CommentReaction entity.
 * 
 * @remarks
 * This DTO contains information about a comment reaction, including its ID,
 * associated comment, and reaction.
 */
export class CommentReactionDTO {
  /**
   * The ID of the comment reaction.
   * @type {number}
   * @optional
   */
  @IsOptional()
  commentReactionId: number;

  /**
   * The comment associated with this reaction.
   * @type {CommentDTO}
   * @nested
   */
  @ValidateNested()
  @Type(() => CommentDTO)
  comment: CommentDTO;

  /**
   * The reaction associated with this comment.
   * @type {ReactionDTO}
   * @nested
   */
  @ValidateNested()
  @Type(() => ReactionDTO)
  reaction: ReactionDTO;

  /**
   * Constructor for CommentReactionDTO.
   * @param {CommentReaction} commentReaction - The CommentReaction entity to create DTO from.
   */
  constructor(commentReaction: CommentReaction) {
    // this.commentReactionId = commentReaction.commentReactionId;
    this.comment = new CommentDTO(commentReaction.comment);
    this.reaction = new ReactionDTO(commentReaction.reaction);
  }
}