import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FriendList } from "./FriendList";
import { Users } from "./Users";

@Index("PK__friends__3FA1E15546C7C974", ["friendId"], { unique: true })
@Entity("friends", { schema: "dbo" })
export class Friends {
  @PrimaryGeneratedColumn({ type: "int", name: "friend_id" })
  friendId: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => FriendList, (friendList) => friendList.friends)
  @JoinColumn([
    { name: "friend_list_id", referencedColumnName: "friendListId" },
  ])
  friendList: FriendList;

  @ManyToOne(() => Users, (users) => users.friends)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
