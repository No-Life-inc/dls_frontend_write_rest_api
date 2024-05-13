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
import { CommentDTO } from "../DTOs/CommentDTO";

/**
 * Represents the Comment entity in the database.
 * 
 * @remarks
 * This entity represents comments made by users on stories.
 */
@Index("PK__comments__E7957687F2C0A46A", ["commentId"], { unique: true })
@Entity("comments", { schema: "dbo" })
export class Comment {

  /**
   * Constructor for Comment entity.
   * @param {CommentDTO} dto - The CommentDTO object to create the entity from.
   */
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

  /**
   * The primary key of the Comment entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "comment_id" })
  commentId: number;

  /**
   * The GUID of the comment.
   * @type {string}
   */
  @Column("uniqueidentifier", { name: "comment_guid", nullable: true })
  commentGuid: string;

  /**
   * The creation date of the comment.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()" })
  createdAt: Date;

  /**
   * The comment information associated with the comment.
   * @type {CommentInfo[]}
   */
  @OneToMany(() => CommentInfo, (commentInfo) => commentInfo.comment, {cascade: true, onDelete: 'CASCADE' })
  commentInfos: CommentInfo[];

  /**
   * The reactions made on the comment.
   * @type {CommentReaction[]}
   */
  @OneToMany(() => CommentReaction, (commentReaction) => commentReaction.comment)
  commentReactions: CommentReaction[];

  /**
   * The user who made the comment.
   * @type {User}
   */
  @ManyToOne(() => User, (users) => users.comments)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  /**
   * The story on which the comment was made.
   * @type {Story}
   */
  @ManyToOne(() => Story, (stories) => stories.comments)
  @JoinColumn([{ name: "story_id", referencedColumnName: "storyId" }])
  story: Story;
}
