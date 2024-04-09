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
import { CreateStoryDTO } from "../DTOs/createStoryDTO";

@Index("PK__stories__66339C5618AA3FAD", ["storyId"], { unique: true })
@Entity("stories", { schema: "dbo" })
export class Stories {

  constructor(dto?: CreateStoryDTO) {
    if (dto) {
      this.storyGuid = dto.storyGuid;
      this.createdAt = dto.createdAt;
      this.user = new Users();
      this.user.userGuid = dto.user.userGuid;
      let storyInfo = new StoryInfo();
      storyInfo.title = dto.storyInfo.title;
      storyInfo.bodyText = dto.storyInfo.bodyText;
      storyInfo.imgUrl = dto.storyInfo.imgUrl;
      this.storyInfos = [storyInfo];
    }
  }


  @PrimaryGeneratedColumn({ type: "int", name: "story_id" })
  storyId: number;

  @Column("uniqueidentifier", { name: "story_guid", nullable: true })
  storyGuid: string | null;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

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
