import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

@Index("PK__comment___0F7A9DF96515BC92", ["commentReactionId"], {
  unique: true,
})
@Entity("comment_reaction", { schema: "dbo" })
export class CommentReaction {
  @PrimaryGeneratedColumn({ type: "int", name: "comment_reaction_id" })
  commentReactionId: number;

  @ManyToOne(() => Comment, (comments) => comments.commentReactions)
  @JoinColumn([{ name: "comment_id", referencedColumnName: "commentId" }])
  comment: Comment;

  @ManyToOne(() => Reaction, (reactions) => reactions.commentReactions)
  @JoinColumn([{ name: "reaction_id", referencedColumnName: "reactionId" }])
  reaction: Reaction;
}
