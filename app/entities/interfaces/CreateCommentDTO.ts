/**
 * CreateCommentDTO
 * This interface represents the data transfer object (DTO) for creating a comment.
 * @param {string} commentGuid - The GUID of the comment.
 * @param {Object} commentInfo - The information about the comment.
 * @param {string} commentInfo.bodyText - The body text of the comment.
 * @param {Object} story - The information about the story to which the comment belongs.
 * @param {string} story.storyGuid - The GUID of the story.
 */
export interface CreateCommentDTO {
  commentGuid: string;
  commentInfo: {
    bodyText: string;
  };
  story: {
    storyGuid: string;
  };
}
