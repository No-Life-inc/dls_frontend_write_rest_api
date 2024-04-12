import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentInfoDTO } from './CommentInfoDTO';
import { CommentReactionDTO } from './CommentReactionDTO';
import { UserDTO } from './UserDTO';
import { StoryDTO } from './StoryDTO';

export class CommentDTO {
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
  @Type(() => UserDTO)
  user: UserDTO;

  @ValidateNested()
  @Type(() => StoryDTO)
  story: StoryDTO;

  constructor(commentId: number, commentGuid: string, createdAt: Date, commentInfos: CommentInfoDTO[], commentReactions: CommentReactionDTO[], user: UserDTO, story: StoryDTO) {
    this.commentId = commentId;
    this.commentGuid = commentGuid;
    this.createdAt = createdAt;
    this.commentInfos = commentInfos;
    this.commentReactions = commentReactions;
    this.user = user;
    this.story = story;
  }
}