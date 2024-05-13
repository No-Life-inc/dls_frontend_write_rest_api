import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CommentReaction } from "./CommentReaction";
import { User } from "./User";
import { Story } from "./Story";
import { ReactionType } from "./ReactionType";
import { StoryReaction } from "./StoryReaction";

/**
 * Represents the Reaction entity in the database.
 * 
 * @remarks
 * This entity represents reactions made by users on comments and stories.
 */
@Index("PK__reaction__36A9D2980E42B100", ["reactionId"], { unique: true })
@Entity("reactions", { schema: "dbo" })
export class Reaction {
  /**
   * The primary key of the Reaction entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "reaction_id" })
  reactionId: number;

  /**
   * The comment reactions associated with the reaction.
   * @type {CommentReaction[]}
   */
  @OneToMany(
    () => CommentReaction,
    (commentReaction) => commentReaction.reaction
  )
  commentReactions: CommentReaction[];

  /**
   * The user who made the reaction.
   * @type {User}
   */
  @ManyToOne(() => User, (users) => users.reactions)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  /**
   * The story on which the reaction was made.
   * @type {Story}
   */
  @ManyToOne(() => Story, (stories) => stories.reactions)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Story;

  /**
   * The type of reaction.
   * @type {ReactionType}
   */
  @ManyToOne(() => ReactionType, (reactionType) => reactionType.reactions)
  @JoinColumn([
    { name: "reaction_type_id", referencedColumnName: "reactionTypeId" },
  ])
  reactionType: ReactionType;

  /**
   * The reactions made on stories associated with the reaction.
   * @type {StoryReaction[]}
   */
  @OneToMany(() => StoryReaction, (storyReaction) => storyReaction.reaction)
  storyReactions: StoryReaction[];
}
