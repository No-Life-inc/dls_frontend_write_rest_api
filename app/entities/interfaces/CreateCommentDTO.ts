export interface CreateCommentDTO {
  commentGuid: string;
  story: {
    storyGuid: string;
  };
  commentInfo: {
    bodyText: string;
  };
}
