import {IsOptional, IsString, IsDate, IsInt} from 'class-validator';
import { CommentInfo } from '../entities/CommentInfo';

/**
 * Data Transfer Object (DTO) for CommentInfo entity.
 * 
 * This DTO is used to transfer data related to a CommentInfo entity.
 * 
 * @remarks
 * This DTO contains information about a comment info, including its ID, body text,
 * creation date, and associated comment ID.
 */
export class CommentInfoDTO {
  /**
   * The ID of the comment info.
   * @type {number}
   * @optional
   */
  @IsOptional()
  commentInfoId: number;

  /**
   * The body text of the comment info.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  bodyText: string;

  /**
   * The creation date of the comment info.
   * @type {Date}
   * @optional
   */
  @IsDate()
  @IsOptional()
  createdAt: Date;

  /**
   * The ID of the associated comment.
   * @type {number}
   */
  @IsInt()
  commentId: number;

  /**
   * Constructor for CommentInfoDTO.
   * @param {CommentInfo} commentInfo - The CommentInfo entity to create DTO from.
   */
  constructor(commentInfo: CommentInfo) {
    // this.commentInfoId = commentInfo.commentInfoId;
    this.bodyText = commentInfo.bodyText;
    this.createdAt = commentInfo.createdAt;
    // this.commentId = commentInfo.comment.commentId;
  }
}