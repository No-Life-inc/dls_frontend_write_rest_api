import {
  Column,
  Entity,
  Index,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Blocked } from "./Blocked";
import { BlockedList } from "./BlockedList";
import { Comments } from "./Comments";
import { FriendList } from "./FriendList";
import { Friends } from "./Friends";
import { Reactions } from "./Reactions";
import { Stories } from "./Stories";
import { UserDeleted } from "./UserDeleted";
import { UserInfo } from "./UserInfo";

@Index("PK__users__B9BE370FB856433B", ["userId"], { unique: true })
@Entity("users", { schema: "dbo" })
export class Users  extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
  userId: number;

  @Column("uniqueidentifier", { name: "user_guid" })
  userGuid: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date | null;

  @OneToMany(() => Blocked, (blocked) => blocked.user)
  blockeds: Blocked[];

  @OneToMany(() => BlockedList, (blockedList) => blockedList.user)
  blockedLists: BlockedList[];

  @OneToMany(() => Comments, (comments) => comments.user)
  comments: Comments[];

  @OneToMany(() => FriendList, (friendList) => friendList.user)
  friendLists: FriendList[];

  @OneToMany(() => Friends, (friends) => friends.user)
  friends: Friends[];

  @OneToMany(() => Reactions, (reactions) => reactions.user)
  reactions: Reactions[];

  @OneToMany(() => Stories, (stories) => stories.user)
  stories: Stories[];

  @OneToMany(() => UserDeleted, (userDeleted) => userDeleted.user)
  userDeleteds: UserDeleted[];

  @OneToMany(() => UserInfo, (userInfo) => userInfo.user)
  userInfos: UserInfo[];
}
