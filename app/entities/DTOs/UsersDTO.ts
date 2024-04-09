import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BlockedDTO } from './BlockedDTO';
import { CommentsDTO } from './CommentsDTO';
import { FriendsDTO } from './FriendsDTO';
import { ReactionsDTO } from './ReactionsDTO';
import { StoriesDTO } from './StoriesDTO';

export class UsersDTO {
  @IsOptional()
  userId: number;

  @IsString()
  @IsOptional()
  userGuid: string | null;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => CommentsDTO)
  comments: CommentsDTO[];

  @ValidateNested({ each: true })
  @Type(() => ReactionsDTO)
  reactions: ReactionsDTO[];

  @ValidateNested({ each: true })
  @Type(() => StoriesDTO)
  stories: StoriesDTO[];

  @ValidateNested({ each: true })
  @Type(() => BlockedDTO)
  blockedBy: BlockedDTO[];

  @ValidateNested({ each: true })
  @Type(() => BlockedDTO)
  blocked: BlockedDTO[];

  @ValidateNested({ each: true })
  @Type(() => FriendsDTO)
  user: FriendsDTO[];

  @ValidateNested({ each: true })
  @Type(() => FriendsDTO)
  friends: FriendsDTO[];

  constructor(userId: number, userGuid: string | null, createdAt: Date, comments: CommentsDTO[], reactions: ReactionsDTO[], stories: StoriesDTO[], blockedBy: BlockedDTO[], blocked: BlockedDTO[], user: FriendsDTO[], friends: FriendsDTO[]) {
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