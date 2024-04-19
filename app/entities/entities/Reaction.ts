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

@Index("PK__reaction__36A9D2980E42B100", ["reactionId"], { unique: true })
@Entity("reactions", { schema: "dbo" })
export class Reaction {
  @PrimaryGeneratedColumn({ type: "int", name: "reaction_id" })
  reactionId: number;

  @OneToMany(
    () => CommentReaction,
    (commentReaction) => commentReaction.reaction
  )
  commentReactions: CommentReaction[];

  @ManyToOne(() => User, (users) => users.reactions)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Story, (stories) => stories.reactions)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Story;

  @ManyToOne(() => ReactionType, (reactionType) => reactionType.reactions)
  @JoinColumn([
    { name: "reaction_type_id", referencedColumnName: "reactionTypeId" },
  ])
  reactionType: ReactionType;

  @OneToMany(() => StoryReaction, (storyReaction) => storyReaction.reaction)
  storyReactions: StoryReaction[];
}
