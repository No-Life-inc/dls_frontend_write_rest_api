import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CommentDTO as CommentDTO } from "./CommentDTO";
import { ReactionDTO as ReactionDTO } from "./ReactionDTO";
import { UserDTO } from "./UserDTO";
import { StoryInfoDTO } from "./StoryInfoDTO";
import { StoryReactionDTO } from "./StoryReactionDTO";
import { Story } from "../entities/Story";
import { UserInfoDTO } from "./UserInfoDTO";

/**
 * Data Transfer Object (DTO) for Story entity.
 * 
 * This DTO is used to transfer data related to a Story entity.
 * 
 * @remarks
 * This DTO contains information about a story, including its ID, GUID, creation date,
 * comments, reactions, user, story info, and story reactions.
 */
export class StoryDTO {
  /**
   * The ID of the story.
   * @type {number}
   * @optional
   */
  @IsOptional()
  storyId: number;

  /**
   * The GUID of the story.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  storyGuid: string;

  /**
   * The creation date of the story.
   * @type {Date}
   */
  @IsDate()
  createdAt: Date;

  /**
   * List of comments associated with the story.
   * @type {CommentDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => CommentDTO)
  comments: CommentDTO[];

  /**
   * List of reactions received by the story.
   * @type {ReactionDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => ReactionDTO)
  reactions: ReactionDTO[];

  /**
   * The user who created the story.
   * @type {UserDTO}
   * @nested
   */
  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  /**
   * Information about the story.
   * @type {StoryInfoDTO}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => StoryInfoDTO)
  storyInfo: StoryInfoDTO;

  /**
   * Reactions received by the story.
   * @type {StoryReactionDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => StoryReactionDTO)
  storyReactions: StoryReactionDTO[];

  /**
   * Constructor for StoryDTO.
   * @param {Story} story - The Story entity to create DTO from.
   * @param {boolean} createComments - Flag indicating whether to create comment DTOs.
   */
  constructor(story: Story, createComments = true) {
    // this.storyId = story.storyId;
    this.storyGuid = story.storyGuid;
    this.createdAt = story.createdAt;
    if (createComments && story.comments) {
      this.comments = story.comments.map(comment => new CommentDTO(comment));
    }
    if (story.reactions) {
      this.reactions = story.reactions.map(
        (reaction) => new ReactionDTO(reaction)
      );
    }
    if (story.user) {
      this.user = new UserDTO();
      this.user.userGuid = story.user.userGuid;
      if (story.user.userInfos) {
          const latestUserInfo = story.user.userInfos.reduce((latest, current) => {
              return new Date(latest.createdAt) > new Date(current.createdAt) ? latest : current;
          });
          this.user.userInfo = new UserInfoDTO(latestUserInfo);
      }
  }

    if (story.storyInfos) {
      const latestStoryInfo = story.storyInfos.reduce((latest, current) => {
        return new Date(latest.createdAt) > new Date(current.createdAt) ? latest : current;
      });
      this.storyInfo = new StoryInfoDTO(latestStoryInfo);
    }
    if(story.storyReactions)
      this.storyReactions = story.storyReactions.map(
        (storyReaction) => new StoryReactionDTO(storyReaction)
      );
  }
}
