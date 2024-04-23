import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CommentDTO as CommentDTO } from "./CommentDTO";
import { ReactionDTO as ReactionDTO } from "./ReactionDTO";
import { UserDTO } from "./UserDTO";
import { StoryInfoDTO } from "./StoryInfoDTO";
import { StoryReactionDTO } from "./StoryReactionDTO";
import { Story } from "../entities/Story";

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
  storyInfos: StoryInfoDTO[];

  @ValidateNested({ each: true })
  @Type(() => StoryReactionDTO)
  storyReactions: StoryReactionDTO[];

  constructor(story: Story) {
    this.storyId = story.storyId;
    this.storyGuid = story.storyGuid;
    this.createdAt = story.createdAt;
    if(story.comments)
      this.comments = story.comments.map((comment) => new CommentDTO(comment));

    if(story.reactions){
      this.reactions = story.reactions.map(
          (reaction) => new ReactionDTO(reaction)
      );
    }
    this.user = new UserDTO(story.user);
    if(story.storyInfos){
      this.storyInfos = story.storyInfos.map(
          (storyInfo) => new StoryInfoDTO(storyInfo)
      );
    }
    if(story.storyReactions){
      this.storyReactions = story.storyReactions.map(
          (storyReaction) => new StoryReactionDTO(storyReaction)
      );
    }
  }
}
