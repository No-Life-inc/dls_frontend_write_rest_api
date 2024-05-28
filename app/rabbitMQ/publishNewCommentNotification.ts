import { publishToQueue, QueueManager } from "./setupRabbit";
import { CommentDTO } from "../entities/DTOs/CommentDTO";

export function publishNewCommentNotification(comment: CommentDTO) {
  const queueManager = QueueManager.getInstance();
  const channel = queueManager.getChannel("new_comment_on_story");

  // get email from user info and story title from story info
  const email = comment.story.user.userInfo.email;
  const storyTitle = comment.story.storyInfo.title;
  const commentBody = comment.commentInfos[0].bodyText;

  const message = {
    user: {
      email: email,
    },
    story_title: storyTitle,
    comment: commentBody,
  };

  if (channel) {
    publishToQueue(message, channel, "new_comment_on_story");
  } else {
    console.error("Failed to get channel for new_comment_on_story");
  }
}

export default publishNewCommentNotification;
