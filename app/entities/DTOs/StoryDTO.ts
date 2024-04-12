import { IsString, IsDate, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CommentDTO as CommentDTO } from './CommentDTO';
import { ReactionDTO as ReactionDTO } from './ReactionDTO';
import { UserDTO as UserDTO } from './UserDTO';
import { StoryInfoDTO } from './StoryInfoDTO';
import { StoryReactionDTO } from './StoryReactionDTO';
import { Story } from '../entities/Story';

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

  constructor(story: Story) {
    this.storyId = story.storyId;
    this.storyGuid = story.storyGuid;
    this.createdAt = story.createdAt;
    this.user = new UserDTO(story.user);
    this.comments = story.comments.map((comment) => new CommentDTO(comment));
    this.reactions = story.reactions.map((reaction) => new ReactionDTO(reaction));
    this.storyInfos = story.storyInfos.map((storyInfo) => new StoryInfoDTO(storyInfo));
    this.storyReactions = story.storyReactions.map((storyReaction) => new StoryReactionDTO(storyReaction));
  }
}