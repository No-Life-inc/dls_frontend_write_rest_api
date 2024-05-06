export interface CreateCommentDTO {
  commentGuid: string;
  commentInfo: {
      bodyText: string;
  };
  story: {
      storyGuid: string;
  };
}