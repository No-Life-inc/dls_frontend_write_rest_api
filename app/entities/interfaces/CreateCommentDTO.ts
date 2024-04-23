export interface CreateCommentDTO {
    commentGuid: string;
    story:{
        storyGuid: string;
    }
    createdAt: string;
    user: {
        userGuid: string;
    };
    commentInfo:{
        bodyText: string;
    }
}