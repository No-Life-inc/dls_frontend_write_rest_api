import { Express } from 'express';
export interface CreateStoryDTO {
    storyGuid: string;
    createdAt: string;
    storyInfo: {
      title: string;
      bodyText: string;
    };
    image: string;
    fileType: string; 
  }