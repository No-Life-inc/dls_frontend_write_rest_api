import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BlockedDTO } from './BlockedDTO';
import { CommentDTO as CommentDTO } from './CommentDTO';
import { FriendDTO as FriendDTO } from './FriendDTO';
import { ReactionDTO as ReactionDTO } from './ReactionDTO';
import { StoryDTO } from './StoryDTO';
import { User } from '../entities/User';


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

  constructor(user: User) {
    this.userId = user.userId;
    this.userGuid = user.userGuid;
    this.createdAt = user.createdAt;
    this.comments = user.comments.map((comment) => new CommentDTO(comment));
    this.reactions = user.reactions.map((reaction) => new ReactionDTO(reaction));
    this.stories = user.stories.map((story) => new StoryDTO(story));
    this.blockedBy = user.blockedBy.map((blocked) => new BlockedDTO(blocked));
    this.blocked = user.blocked.map((blocked) => new BlockedDTO(blocked));
    this.user = user.user.map((friend) => new FriendDTO(friend));
    this.friends = user.friends.map((friend) => new FriendDTO(friend));
  }
}