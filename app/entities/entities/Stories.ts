import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comments } from "./Comments";
import { Reactions } from "./Reactions";
import { Users } from "./Users";
import { StoryInfo } from "./StoryInfo";
import { StoryReaction } from "./StoryReaction";

@Index("PK__stories__66339C5618AA3FAD", ["storyId"], { unique: true })
@Entity("stories", { schema: "dbo" })
export class Stories {
  @PrimaryGeneratedColumn({ type: "int", name: "story_id" })
  storyId: number;

  @Column("uniqueidentifier", { name: "story_guid", nullable: true })
  storyGuid: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @OneToMany(() => Comments, (comments) => comments.story)
  comments: Comments[];

  @OneToMany(() => Reactions, (reactions) => reactions.story)
  reactions: Reactions[];

  @ManyToOne(() => Users, (users) => users.stories)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;

  @OneToMany(() => StoryInfo, (storyInfo) => storyInfo.story, { cascade: true }) //needs to be cascade for it to be created
  storyInfos: StoryInfo[];

  @OneToMany(() => StoryReaction, (storyReaction) => storyReaction.story)
  storyReactions: StoryReaction[];
}
