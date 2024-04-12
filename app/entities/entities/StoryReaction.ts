import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stories } from "./Story";
import { Reactions } from "./Reaction";

@Index("PK__story_re__34E334265353C38F", ["storyReactionId"], { unique: true })
@Entity("story_reaction", { schema: "dbo" })
export class StoryReaction {
  @PrimaryGeneratedColumn({ type: "int", name: "story_reaction_id" })
  storyReactionId: number;

  @ManyToOne(() => Stories, (stories) => stories.storyReactions)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Stories;

  @ManyToOne(() => Reactions, (reactions) => reactions.storyReactions)
  @JoinColumn([{ name: "reaction_id", referencedColumnName: "reactionId" }])
  reaction: Reactions;
}
