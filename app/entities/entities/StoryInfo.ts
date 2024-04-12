import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Stories } from "./Story";

@Index("PK__story_in__3B3D55ED8A13B44A", ["storyInfoId"], { unique: true })
@Entity("story_info", { schema: "dbo" })
export class StoryInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "story_info_id" })
  storyInfoId: number;

  @Column("nvarchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("nvarchar", { name: "body_text", nullable: true })
  bodyText: string | null;

  @Column("nvarchar", { name: "img_url", nullable: true, length: 255 })
  imgUrl: string | null;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @ManyToOne(() => Stories, (stories) => stories.storyInfos)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Stories;
}
