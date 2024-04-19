import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentDTO } from './CommentDTO';
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

  @ValidateNested()
  @Type(() => CommentDTO)
  comment: CommentDTO;

  constructor(commentInfo: CommentInfo) {
    this.commentInfoId = commentInfo.commentInfoId;
    this.bodyText = commentInfo.bodyText;
    this.createdAt = commentInfo.createdAt;
    this.comment = new CommentDTO(commentInfo.comment);
  }

}