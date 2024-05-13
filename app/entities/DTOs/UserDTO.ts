import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BlockedDTO } from './BlockedDTO';
import { CommentDTO } from './CommentDTO';
import { FriendDTO } from './FriendDTO';
import { ReactionDTO  } from './ReactionDTO';
import { StoryDTO } from './StoryDTO';
import { User } from '../entities/User';
import { UserInfoDTO } from './UserInfoDTO';


/**
 * Data Transfer Object (DTO) for User entity.
 * 
 * This DTO is used to transfer data related to a User entity.
 * 
 * @remarks
 * This DTO contains information about a user, including its ID, GUID, creation date,
 * user info, comments, reactions, stories, blocked users, and friends.
 */
export class UserDTO {
  /**
   * The ID of the user.
   * @type {number}
   * @optional
   */
  @IsOptional()
  userId: number;

  /**
   * The GUID of the user.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  userGuid: string;

  /**
   * The creation date of the user.
   * @type {Date}
   */
  @IsDate()
  createdAt: Date;

  /**
   * Information about the user.
   * @type {UserInfoDTO}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => UserInfoDTO)
  userInfo: UserInfoDTO;

  /**
   * List of comments made by the user.
   * @type {CommentDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => CommentDTO)
  comments: CommentDTO[];

  /**
   * List of reactions made by the user.
   * @type {ReactionDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => ReactionDTO)
  reactions: ReactionDTO[];

  /**
   * List of stories created by the user.
   * @type {StoryDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => StoryDTO)
  stories: StoryDTO[];

  /**
   * List of users who blocked the user.
   * @type {BlockedDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => BlockedDTO)
  blockedBy: BlockedDTO[];

  /**
   * List of users blocked by the user.
   * @type {BlockedDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => BlockedDTO)
  blocked: BlockedDTO[];

  /**
   * List of user's friends.
   * @type {FriendDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => FriendDTO)
  user: FriendDTO[];

  /**
   * List of users who consider the user as a friend.
   * @type {FriendDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => FriendDTO)
  friends: FriendDTO[];

  /**
   * Constructor for UserDTO.
   * @param {User} user - The User entity to create DTO from.
   */
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