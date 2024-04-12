import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment";

@Index("PK__comment___CAA6633B2B74079B", ["commentInfoId"], { unique: true })
@Entity("comment_info", { schema: "dbo" })
export class CommentInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "comment_info_id" })
  commentInfoId: number;

  @Column("nvarchar", { name: "body_text", nullable: true })
  bodyText: string;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @ManyToOne(() => Comment, (comments) => comments.commentInfos)
  @JoinColumn([{ name: "comment_id", referencedColumnName: "commentId" }])
  comment: Comment;
}
