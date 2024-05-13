import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment";

/**
 * Represents the CommentInfo entity in the database.
 * 
 * @remarks
 * This entity represents additional information associated with comments.
 */
@Index("PK__comment___CAA6633B2B74079B", ["commentInfoId"], { unique: true })
@Entity("comment_info", { schema: "dbo" })
export class CommentInfo {
  /**
   * The primary key of the CommentInfo entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "comment_info_id" })
  commentInfoId: number;

  /**
   * The text content of the comment.
   * @type {string}
   */
  @Column("nvarchar", { name: "body_text", nullable: true })
  bodyText: string;

  /**
   * The creation date of the comment info.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()" })
  createdAt: Date;

  /**
   * The comment associated with this comment info.
   * @type {Comment}
   */
  @ManyToOne(() => Comment, (comments) => comments.commentInfos)
  @JoinColumn([{ name: "comment_id", referencedColumnName: "commentId" }])
  comment: Comment;
}
