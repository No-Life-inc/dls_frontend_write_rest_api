import {IsOptional, IsString, IsDate, IsInt} from 'class-validator';
import { CommentInfo } from '../entities/CommentInfo';

export class CommentInfoDTO {
  @IsOptional()
  commentInfoId: number;

  @IsString()
  @IsOptional()
  bodyText: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsInt()
  commentId: number;

  constructor(commentInfo: CommentInfo) {
    this.commentInfoId = commentInfo.commentInfoId;
    this.bodyText = commentInfo.bodyText;
    this.createdAt = commentInfo.createdAt;
    this.commentId = commentInfo.comment.commentId;
  }
}