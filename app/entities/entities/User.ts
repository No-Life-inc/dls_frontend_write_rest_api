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

@Index("PK__users__B9BE370FB856433B", ["userId"], { unique: true })
@Entity("users", { schema: "dbo" })
export class User  extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
  userId: number;

  @Column("uniqueidentifier", { name: "user_guid" })
  userGuid: string;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @OneToMany(() => Comment, (comments) => comments.user)
  comments: Comment[];

  @OneToMany(() => Reaction, (reactions) => reactions.user)
  reactions: Reaction[];

  @OneToMany(() => Story, (stories) => stories.user)
  stories: Story[];

  @ManyToMany(() => Blocked, (blocked) => blocked.users)
  @JoinTable()
  blockedBy: Blocked[];

  @ManyToMany(() => Blocked, (blocked) => blocked.users)
  @JoinTable()
  blocked: Blocked[]

  @ManyToMany(() => Friend, (friends) => friends.users)
  @JoinTable()
  user: Friend[]

  @ManyToMany(() => Friend, (friends) => friends.users)
  @JoinTable()
  friends: Friend[]

  @OneToMany(() => UserInfo, (userInfo) => userInfo.user)
  userInfos: UserInfo[]
}
