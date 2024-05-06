import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CommentDTO as CommentDTO } from "./CommentDTO";
import { ReactionDTO as ReactionDTO } from "./ReactionDTO";
import { UserDTO } from "./UserDTO";
import { StoryInfoDTO } from "./StoryInfoDTO";
import { StoryReactionDTO } from "./StoryReactionDTO";
import { Story } from "../entities/Story";
import { UserInfoDTO } from "./UserInfoDTO";

export class StoryDTO {
  @IsOptional()
  storyId: number;

  @IsString()
  @IsOptional()
  storyGuid: string;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => CommentDTO)
  comments: CommentDTO[];

  @ValidateNested({ each: true })
  @Type(() => ReactionDTO)
  reactions: ReactionDTO[];

  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  @ValidateNested({ each: true })
  @Type(() => StoryInfoDTO)
  storyInfo: StoryInfoDTO;

  @ValidateNested({ each: true })
  @Type(() => StoryReactionDTO)
  storyReactions: StoryReactionDTO[];

  constructor(story: Story, createComments = true) {
    // this.storyId = story.storyId;
    this.storyGuid = story.storyGuid;
    this.createdAt = story.createdAt;
    if (createComments && story.comments) {
      this.comments = story.comments.map(comment => new CommentDTO(comment));
    }
    if(story.reactions)
      this.reactions = story.reactions.map(
        (reaction) => new ReactionDTO(reaction)
      );
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
