import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CommentInfo } from "./CommentInfo";
import { CommentReaction } from "./CommentReaction";
import { User } from "./User";
import { Story } from "./Story";
import {CommentDTO} from "../DTOs/CommentDTO";

@Index("PK__comments__E7957687F2C0A46A", ["commentId"], { unique: true })
@Entity("comments", { schema: "dbo" })
export class Comment {

  constructor(dto?: CommentDTO) {
    if (dto) {
      this.commentGuid = dto.commentGuid;
      this.createdAt = dto.createdAt;
      this.user = new User();
      this.user.userGuid = dto.user.userGuid;
      this.story = new Story();
      this.story.storyGuid = dto.story.storyGuid;
      this.commentInfos = dto.commentInfos.map(commentInfoDTO => {
        let commentInfo = new CommentInfo();
        commentInfo.bodyText = commentInfoDTO.bodyText;
        return commentInfo;
      });
    }
  }

  @PrimaryGeneratedColumn({ type: "int", name: "comment_id" })
  commentId: number;

  @Column("uniqueidentifier", { name: "comment_guid", nullable: true })
  commentGuid: string;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @OneToMany(() => CommentInfo, (commentInfo) => commentInfo.comment)
  commentInfos: CommentInfo[];

  @OneToMany(
    () => CommentReaction,
    (commentReaction) => commentReaction.comment
  )
  commentReactions: CommentReaction[];

  @ManyToOne(() => User, (users) => users.comments)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => Story, (stories) => stories.comments)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Story;
}
