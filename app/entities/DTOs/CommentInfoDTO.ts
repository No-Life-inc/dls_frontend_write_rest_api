import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentDTO } from './CommentDTO';

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

  constructor(commentInfoId: number, bodyText: string, createdAt: Date, comment: CommentDTO) {
    this.commentInfoId = commentInfoId;
    this.bodyText = bodyText;
    this.createdAt = createdAt;
    this.comment = comment;
  }
}