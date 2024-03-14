import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Friends } from "./Friends";

@Index("PK__friend_l__534C2800B290E3F8", ["friendListId"], { unique: true })
@Entity("friend_list", { schema: "dbo" })
export class FriendList {
  @PrimaryGeneratedColumn({ type: "int", name: "friend_list_id" })
  friendListId: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Users, (users) => users.friendLists)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;

  @OneToMany(() => Friends, (friends) => friends.friendList)
  friends: Friends[];
}
