import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentsDTO } from './CommentsDTO';

export class CommentInfoDTO {
  @IsOptional()
  commentInfoId: number;

  @IsString()
  @IsOptional()
  bodyText: string | null;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ValidateNested()
  @Type(() => CommentsDTO)
  comment: CommentsDTO;

  constructor(commentInfoId: number, bodyText: string | null, createdAt: Date, comment: CommentsDTO) {
    this.commentInfoId = commentInfoId;
    this.bodyText = bodyText;
    this.createdAt = createdAt;
    this.comment = comment;
  }
}