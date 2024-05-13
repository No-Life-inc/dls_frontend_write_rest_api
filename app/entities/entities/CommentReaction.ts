import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

/**
 * Represents the CommentReaction entity in the database.
 * 
 * @remarks
 * This entity represents reactions made on comments.
 */
@Index("PK__comment___0F7A9DF96515BC92", ["commentReactionId"], {
  unique: true,
})
@Entity("comment_reaction", { schema: "dbo" })
export class CommentReaction {
  /**
   * The primary key of the CommentReaction entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "comment_reaction_id" })
  commentReactionId: number;

  /**
   * The comment associated with the reaction.
   * @type {Comment}
   */
  @ManyToOne(() => Comment, (comments) => comments.commentReactions)
  @JoinColumn([{ name: "comment_id", referencedColumnName: "commentId" }])
  comment: Comment;

  /**
   * The reaction associated with the comment.
   * @type {Reaction}
   */
  @ManyToOne(() => Reaction, (reactions) => reactions.commentReactions)
  @JoinColumn([{ name: "reaction_id", referencedColumnName: "reactionId" }])
  reaction: Reaction;
}
