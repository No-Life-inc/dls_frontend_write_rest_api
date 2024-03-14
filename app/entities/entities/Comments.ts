import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CommentInfo } from "./CommentInfo";
import { CommentReaction } from "./CommentReaction";
import { Users } from "./Users";
import { Stories } from "./Stories";

@Index("PK__comments__E7957687F2C0A46A", ["commentId"], { unique: true })
@Entity("comments", { schema: "dbo" })
export class Comments {
  @PrimaryGeneratedColumn({ type: "int", name: "comment_id" })
  commentId: number;

  @Column("uniqueidentifier", { name: "comment_guid", nullable: true })
  commentGuid: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @OneToMany(() => CommentInfo, (commentInfo) => commentInfo.comment)
  commentInfos: CommentInfo[];

  @OneToMany(
    () => CommentReaction,
    (commentReaction) => commentReaction.comment
  )
  commentReactions: CommentReaction[];

  @ManyToOne(() => Users, (users) => users.comments)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;

  @ManyToOne(() => Stories, (stories) => stories.comments)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Stories;
}
