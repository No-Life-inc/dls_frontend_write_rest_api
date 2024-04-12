import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentInfoDTO } from './CommentInfoDTO';
import { CommentReactionDTO } from './CommentReactionDTO';
import { UserDTO } from './UserDTO';
import { StoryDTO } from './StoryDTO';
import { Comment } from '../entities/Comment';

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

  constructor(comment: Comment) {
    this.commentId = comment.commentId;
    this.commentGuid = comment.commentGuid;
    this.createdAt = comment.createdAt;
    this.commentInfos = comment.commentInfos.map((commentInfo) => new CommentInfoDTO(commentInfo));
    this.commentReactions = comment.commentReactions.map((commentReaction) => new CommentReactionDTO(commentReaction));
    this.user = new UserDTO(comment.user);
    this.story = new StoryDTO(comment.story);
  }
}
