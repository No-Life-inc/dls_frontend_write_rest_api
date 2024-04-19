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