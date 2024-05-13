import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Story } from "./Story";

/**
 * Represents the StoryInfo entity in the database.
 * 
 * @remarks
 * This entity represents additional information associated with a story.
 */
@Index("PK__story_in__3B3D55ED8A13B44A", ["storyInfoId"], { unique: true })
@Entity("story_info", { schema: "dbo" })
export class StoryInfo {
  /**
   * The primary key of the StoryInfo entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "story_info_id" })
  storyInfoId: number;

  /**
   * The title of the story.
   * @type {string}
   */
  @Column("nvarchar", { name: "title", nullable: true, length: 255 })
  title: string;

  /**
   * The body text of the story.
   * @type {string}
   */
  @Column("nvarchar", { name: "body_text", nullable: true })
  bodyText: string;

  /**
   * The URL of the image associated with the story.
   * @type {string | null}
   */
  @Column("nvarchar", { name: "img_url", nullable: true, length: 255 })
  imgUrl: string | null;

  /**
   * The date and time the story information was created.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  /**
   * The story associated with this story information.
   * @type {Story}
   */
  @ManyToOne(() => Story, (stories) => stories.storyInfos)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Story;
}
