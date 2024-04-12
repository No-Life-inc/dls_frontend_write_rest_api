import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentInfoDTO } from './CommentInfoDTO';
import { CommentReactionDTO } from './CommentReactionDTO';
import { UsersDTO } from './UserDTO';
import { StoriesDTO } from './StoryDTO';

export class CommentsDTO {
  @IsOptional()
  commentId: number;

  @IsString()
  @IsOptional()
  commentGuid: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => CommentInfoDTO)
  commentInfos: CommentInfoDTO[];

  @ValidateNested({ each: true })
  @Type(() => CommentReactionDTO)
  commentReactions: CommentReactionDTO[];

  @ValidateNested()
  @Type(() => UsersDTO)
  user: UsersDTO;

  @ValidateNested()
  @Type(() => StoriesDTO)
  story: StoriesDTO;

  constructor(commentId: number, commentGuid: string, createdAt: Date, commentInfos: CommentInfoDTO[], commentReactions: CommentReactionDTO[], user: UsersDTO, story: StoriesDTO) {
    this.commentId = commentId;
    this.commentGuid = commentGuid;
    this.createdAt = createdAt;
    this.commentInfos = commentInfos;
    this.commentReactions = commentReactions;
    this.user = user;
    this.story = story;
  }
}