import { IsString, IsDate, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentDTO as CommentDTO } from './CommentDTO';
import { ReactionDTO as ReactionDTO } from './ReactionDTO';
import { UserDTO as UserDTO } from './UserDTO';
import { StoryInfoDTO } from './StoryInfoDTO';
import { StoryReactionDTO } from './StoryReactionDTO';

export class StoryDTO {
  @IsOptional()
  storyId: number;

  @IsString()
  @IsOptional()
  storyGuid: string;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => CommentDTO)
  comments: CommentDTO[];

  @ValidateNested({ each: true })
  @Type(() => ReactionDTO)
  reactions: ReactionDTO[];

  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  @ValidateNested({ each: true })
  @Type(() => StoryInfoDTO)
  storyInfos: StoryInfoDTO[];

  @ValidateNested({ each: true })
  @Type(() => StoryReactionDTO)
  storyReactions: StoryReactionDTO[];

  constructor(storyId: number, storyGuid: string, createdAt: Date, user: UserDTO, comments: CommentDTO[], reactions: ReactionDTO[], storyInfos: StoryInfoDTO[], storyReactions: StoryReactionDTO[]) {
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