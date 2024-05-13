/**
 * CreateStoryDTO
 * This interface represents the data transfer object (DTO) for creating a story.
 * @param {string} storyGuid - The GUID of the story.
 * @param {string} createdAt - The creation date of the story.
 * @param {Object} user - The information about the user who created the story.
 * @param {string} user.userGuid - The GUID of the user.
 * @param {Object} storyInfo - The information about the story content.
 * @param {string} storyInfo.title - The title of the story.
 * @param {string} storyInfo.bodyText - The body text of the story.
 * @param {string} storyInfo.imgUrl - The URL of the image associated with the story.
 */
export interface CreateStoryDTO {
  storyGuid: string;
  createdAt: string;
  user: {
    userGuid: string;
  };
  storyInfo: {
    title: string;
    bodyText: string;
    imgUrl: string;
  };
}
