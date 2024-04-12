import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BlockedDTO } from './BlockedDTO';
import { CommentDTO as CommentDTO } from './CommentDTO';
import { FriendDTO as FriendDTO } from './FriendDTO';
import { ReactionDTO as ReactionDTO } from './ReactionDTO';
import { StoryDTO } from './StoryDTO';

export class UserDTO {
  @IsOptional()
  userId: number;

  @IsString()
  @IsOptional()
  userGuid: string;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => CommentDTO)
  comments: CommentDTO[];

  @ValidateNested({ each: true })
  @Type(() => ReactionDTO)
  reactions: ReactionDTO[];

  @ValidateNested({ each: true })
  @Type(() => StoryDTO)
  stories: StoryDTO[];

  @ValidateNested({ each: true })
  @Type(() => BlockedDTO)
  blockedBy: BlockedDTO[];

  @ValidateNested({ each: true })
  @Type(() => BlockedDTO)
  blocked: BlockedDTO[];

  @ValidateNested({ each: true })
  @Type(() => FriendDTO)
  user: FriendDTO[];

  @ValidateNested({ each: true })
  @Type(() => FriendDTO)
  friends: FriendDTO[];

  constructor(userId: number, userGuid: string, createdAt: Date, comments: CommentDTO[], reactions: ReactionDTO[], stories: StoryDTO[], blockedBy: BlockedDTO[], blocked: BlockedDTO[], user: FriendDTO[], friends: FriendDTO[]) {
    this.userId = userId;
    this.userGuid = userGuid;
    this.createdAt = createdAt;
    this.comments = comments;
    this.reactions = reactions;
    this.stories = stories;
    this.blockedBy = blockedBy;
    this.blocked = blocked;
    this.user = user;
    this.friends = friends;
  }
}