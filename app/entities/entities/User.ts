import {
  Column,
  Entity,
  Index,
  OneToMany,
  ManyToMany,
  JoinTable,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Blocked } from "./Blocked";
import { Comments } from "./Comment";
import { Friends } from "./Friend";
import { Reactions } from "./Reaction";
import { Stories } from "./Story";

@Index("PK__users__B9BE370FB856433B", ["userId"], { unique: true })
@Entity("users", { schema: "dbo" })
export class Users  extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
  userId: number;

  @Column("uniqueidentifier", { name: "user_guid" })
  userGuid: string | null;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @OneToMany(() => Comments, (comments) => comments.user)
  comments: Comments[];

  @OneToMany(() => Reactions, (reactions) => reactions.user)
  reactions: Reactions[];

  @OneToMany(() => Stories, (stories) => stories.user)
  stories: Stories[];

  @ManyToMany(() => Blocked, (blocked) => blocked.users)
  @JoinTable()
  blockedBy: Blocked[];

  @ManyToMany(() => Blocked, (blocked) => blocked.users)
  @JoinTable()
  blocked: Blocked[]

  @ManyToMany(() => Friends, (friends) => friends.users)
  @JoinTable()
  user: Friends[]

  @ManyToMany(() => Friends, (friends) => friends.users)
  @JoinTable()
  friends: Friends[]
}
