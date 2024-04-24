import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BlockedDTO } from './BlockedDTO';
import { CommentDTO } from './CommentDTO';
import { FriendDTO } from './FriendDTO';
import { ReactionDTO  } from './ReactionDTO';
import { StoryDTO } from './StoryDTO';
import { User } from '../entities/User';
import { UserInfoDTO } from './UserInfoDTO';


export class UserDTO {
  @IsOptional()
  userId: number;

  @IsString()
  @IsOptional()
  userGuid: string;

  @IsDate()
  createdAt: Date;

  // add UserInfoDTO
  @ValidateNested({ each: true })
  @Type(() => UserInfoDTO)
  userInfo: UserInfoDTO;

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

  constructor(user?: User) {
    if (!user) {
      return;
    }
    this.userId = user.userId;
    this.userGuid = user.userGuid;
    this.createdAt = user.createdAt;
    if (user.userInfos) {
      const latestUserInfo = user.userInfos.reduce((latest, current) => {
        return new Date(latest.createdAt) > new Date(current.createdAt) ? latest : current;
      });
      this.userInfo = new UserInfoDTO(latestUserInfo);
    }
    if(user.comments) this.comments = user.comments.map((comment) => new CommentDTO(comment));
    if(user.reactions) this.reactions = user.reactions.map((reaction) => new ReactionDTO(reaction));
    if(user.stories) this.stories = user.stories.map((story) => new StoryDTO(story));
    if(user.blockedBy) this.blockedBy = user.blockedBy.map((blocked) => new BlockedDTO(blocked));
    if(user.blocked) this.blocked = user.blocked.map((blocked) => new BlockedDTO(blocked));
    if(user.user) this.user = user.user.map((friend) => new FriendDTO(friend));
    if(user.friends) this.friends = user.friends.map((friend) => new FriendDTO(friend));
  }
}