import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  JoinColumn,
  JoinTable,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Blocked } from "./Blocked";
import { Comment } from "./Comment";
import { Friend as Friend } from "./Friend";
import { Reaction } from "./Reaction";
import { Story } from "./Story";
import { UserInfo } from "./UserInfo";

/**
 * Represents a user entity in the database.
 * 
 * @remarks
 * This entity represents a user, who can create comments, reactions, stories, and have connections with other users.
 */
@Index("PK__users__B9BE370FB856433B", ["userId"], { unique: true })
@Entity("users", { schema: "dbo" })
export class User extends BaseEntity {
  /**
   * The primary key of the User entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
  userId: number;

  /**
   * The GUID of the user.
   * @type {string}
   */
  @Column("uniqueidentifier", { name: "user_guid" })
  userGuid: string;

  /**
   * The date and time when the user was created.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()" })
  createdAt: Date;

  /**
   * Comments made by this user.
   * @type {Comment[]}
   */
  @OneToMany(() => Comment, (comments) => comments.user)
  comments: Comment[];

  /**
   * Reactions made by this user.
   * @type {Reaction[]}
   */
  @OneToMany(() => Reaction, (reactions) => reactions.user)
  reactions: Reaction[];

  /**
   * Stories created by this user.
   * @type {Story[]}
   */
  @OneToMany(() => Story, (stories) => stories.user)
  stories: Story[];

  /**
   * Users blocked by this user.
   * @type {Blocked[]}
   */
  @ManyToMany(() => Blocked, (blocked) => blocked.users)
  @JoinTable()
  blockedBy: Blocked[];

  /**
   * Users blocked by this user.
   * @type {Blocked[]}
   */
  @ManyToMany(() => Blocked, (blocked) => blocked.users)
  @JoinTable()
  blocked: Blocked[];

  /**
   * Users connected to this user as friends.
   * @type {Friend[]}
   */
  @ManyToMany(() => Friend, (friends) => friends.users)
  @JoinTable()
  user: Friend[];

  /**
   * Users connected to this user as friends.
   * @type {Friend[]}
   */
  @ManyToMany(() => Friend, (friends) => friends.users)
  @JoinTable()
  friends: Friend[];

  /**
   * Additional information about this user.
   * @type {UserInfo[]}
   */
  @OneToMany(() => UserInfo, (userInfo) => userInfo.user)
  userInfos: UserInfo[];
}
