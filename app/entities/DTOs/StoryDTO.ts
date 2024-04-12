import { IsString, IsDate, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentsDTO } from './CommentDTO';
import { ReactionsDTO } from './ReactionDTO';
import { UsersDTO } from './UserDTO';
import { StoryInfoDTO } from './StoryInfoDTO';
import { StoryReactionDTO } from './StoryReactionDTO';

export class StoriesDTO {
  @IsOptional()
  storyId: number;

  @IsString()
  @IsOptional()
  storyGuid: string;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => CommentsDTO)
  comments: CommentsDTO[];

  @ValidateNested({ each: true })
  @Type(() => ReactionsDTO)
  reactions: ReactionsDTO[];

  @ValidateNested()
  @Type(() => UsersDTO)
  user: UsersDTO;

  @ValidateNested({ each: true })
  @Type(() => StoryInfoDTO)
  storyInfos: StoryInfoDTO[];

  @ValidateNested({ each: true })
  @Type(() => StoryReactionDTO)
  storyReactions: StoryReactionDTO[];

  constructor(storyId: number, storyGuid: string, createdAt: Date, user: UsersDTO, comments: CommentsDTO[], reactions: ReactionsDTO[], storyInfos: StoryInfoDTO[], storyReactions: StoryReactionDTO[]) {
    this.storyId = storyId;
    this.storyGuid = storyGuid;
    this.createdAt = createdAt;
    this.user = user;
    this.comments = comments;
    this.reactions = reactions;
    this.storyInfos = storyInfos;
    this.storyReactions = storyReactions;
  }
}