import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment";
import { Reaction } from "./Reaction";
import { User } from "./User";
import { StoryInfo } from "./StoryInfo";
import { StoryReaction } from "./StoryReaction";
import { CreateStoryDTO } from "../DTOs/createStoryDTO";
import { StoryDTO } from "../DTOs/StoryDTO";

/**
 * Represents the Story entity in the database.
 * 
 * @remarks
 * This entity represents a story created by a user.
 */
@Index("PK__stories__66339C5618AA3FAD", ["storyId"], { unique: true })
@Entity("stories", { schema: "dbo" })
export class Story {

  constructor(dto?: StoryDTO) {
    if (dto) {
      this.storyGuid = dto.storyGuid;
      this.createdAt = dto.createdAt;
      this.user = new User();
      this.user.userGuid = dto.user.userGuid;
      if (dto.storyInfo) {
        let storyInfo = new StoryInfo();
        storyInfo.title = dto.storyInfo.title;
        storyInfo.bodyText = dto.storyInfo.bodyText;
        storyInfo.imgUrl = dto.storyInfo.imgUrl;
        this.storyInfos = [storyInfo];
      }
    }
  }

  /**
   * The primary key of the Story entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "story_id" })
  storyId: number;

  /**
   * The GUID of the story.
   * @type {string}
   */
  @Column("uniqueidentifier", { name: "story_guid", nullable: true })
  storyGuid: string;

  /**
   * The date and time the story was created.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  /**
   * The comments associated with this story.
   * @type {Comment[]}
   */
  @OneToMany(() => Comment, (comments) => comments.story,  { onDelete: 'CASCADE' })
  comments: Comment[];

  /**
   * The reactions associated with this story.
   * @type {Reaction[]}
   */
  @OneToMany(() => Reaction, (reactions) => reactions.story)
  reactions: Reaction[];

  /**
   * The user who created the story.
   * @type {User}
   */
  @ManyToOne(() => User, (users) => users.stories)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  /**
   * The information associated with this story.
   * @type {StoryInfo[]}
   */
  @OneToMany(() => StoryInfo, (storyInfo) => storyInfo.story, { cascade: true, onDelete: 'CASCADE' }) //needs to be cascade for it to be created
  storyInfos: StoryInfo[];

  /**
   * The reactions associated with this story.
   * @type {StoryReaction[]}
   */
  @OneToMany(() => StoryReaction, (storyReaction) => storyReaction.story)
  storyReactions: StoryReaction[];
}
