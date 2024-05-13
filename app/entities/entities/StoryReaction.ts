import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Story } from "./Story";
import { Reaction } from "./Reaction";

/**
 * Represents the association between a story and a reaction in the database.
 * 
 * @remarks
 * This entity represents the relationship between a story and a reaction, indicating that a particular reaction was made on a specific story.
 */
@Index("PK__story_re__34E334265353C38F", ["storyReactionId"], { unique: true })
@Entity("story_reaction", { schema: "dbo" })
export class StoryReaction {
  /**
   * The primary key of the StoryReaction entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "story_reaction_id" })
  storyReactionId: number;

  /**
   * The story associated with this story reaction.
   * @type {Story}
   */
  @ManyToOne(() => Story, (stories) => stories.storyReactions)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Story;

  /**
   * The reaction associated with this story reaction.
   * @type {Reaction}
   */
  @ManyToOne(() => Reaction, (reactions) => reactions.storyReactions)
  @JoinColumn([{ name: "reaction_id", referencedColumnName: "reactionId" }])
  reaction: Reaction;
}
