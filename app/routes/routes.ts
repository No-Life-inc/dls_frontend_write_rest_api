/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StoriesController } from './stories';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Comment": {
        "dataType": "refObject",
        "properties": {
            "commentId": {"dataType":"double","required":true},
            "commentGuid": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "commentInfos": {"dataType":"array","array":{"dataType":"refObject","ref":"CommentInfo"},"required":true},
            "commentReactions": {"dataType":"array","array":{"dataType":"refObject","ref":"CommentReaction"},"required":true},
            "user": {"ref":"User","required":true},
            "story": {"ref":"Story","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommentInfo": {
        "dataType": "refObject",
        "properties": {
            "commentInfoId": {"dataType":"double","required":true},
            "bodyText": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "comment": {"ref":"Comment","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CommentReaction": {
        "dataType": "refObject",
        "properties": {
            "commentReactionId": {"dataType":"double","required":true},
            "comment": {"ref":"Comment","required":true},
            "reaction": {"ref":"Reaction","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Reaction": {
        "dataType": "refObject",
        "properties": {
            "reactionId": {"dataType":"double","required":true},
            "commentReactions": {"dataType":"array","array":{"dataType":"refObject","ref":"CommentReaction"},"required":true},
            "user": {"ref":"User","required":true},
            "story": {"ref":"Story","required":true},
            "reactionType": {"ref":"ReactionType","required":true},
            "storyReactions": {"dataType":"array","array":{"dataType":"refObject","ref":"StoryReaction"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Story": {
        "dataType": "refObject",
        "properties": {
            "storyId": {"dataType":"double","required":true},
            "storyGuid": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "comments": {"dataType":"array","array":{"dataType":"refObject","ref":"Comment"},"required":true},
            "reactions": {"dataType":"array","array":{"dataType":"refObject","ref":"Reaction"},"required":true},
            "user": {"ref":"User","required":true},
            "storyInfos": {"dataType":"array","array":{"dataType":"refObject","ref":"StoryInfo"},"required":true},
            "storyReactions": {"dataType":"array","array":{"dataType":"refObject","ref":"StoryReaction"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"double","required":true},
            "userGuid": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "comments": {"dataType":"array","array":{"dataType":"refObject","ref":"Comment"},"required":true},
            "reactions": {"dataType":"array","array":{"dataType":"refObject","ref":"Reaction"},"required":true},
            "stories": {"dataType":"array","array":{"dataType":"refObject","ref":"Story"},"required":true},
            "blockedBy": {"dataType":"array","array":{"dataType":"refObject","ref":"Blocked"},"required":true},
            "blocked": {"dataType":"array","array":{"dataType":"refObject","ref":"Blocked"},"required":true},
            "user": {"dataType":"array","array":{"dataType":"refObject","ref":"Friend"},"required":true},
            "friends": {"dataType":"array","array":{"dataType":"refObject","ref":"Friend"},"required":true},
            "userInfos": {"dataType":"array","array":{"dataType":"refObject","ref":"UserInfo"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Blocked": {
        "dataType": "refObject",
        "properties": {
            "blockedId": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "users": {"dataType":"array","array":{"dataType":"refObject","ref":"User"},"required":true},
            "blocked": {"dataType":"array","array":{"dataType":"refObject","ref":"User"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Friend": {
        "dataType": "refObject",
        "properties": {
            "friendship_id": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "users": {"dataType":"array","array":{"dataType":"refObject","ref":"User"},"required":true},
            "friends": {"dataType":"array","array":{"dataType":"refObject","ref":"User"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserInfo": {
        "dataType": "refObject",
        "properties": {
            "userInfoId": {"dataType":"double","required":true},
            "firstName": {"dataType":"string","required":true},
            "lastName": {"dataType":"string","required":true},
            "imgUrl": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "email": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "user": {"ref":"User","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReactionType": {
        "dataType": "refObject",
        "properties": {
            "reactionTypeId": {"dataType":"double","required":true},
            "reactionTypeName": {"dataType":"string","required":true},
            "reactionTypeImg": {"dataType":"string","required":true},
            "reactions": {"dataType":"array","array":{"dataType":"refObject","ref":"Reaction"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StoryReaction": {
        "dataType": "refObject",
        "properties": {
            "storyReactionId": {"dataType":"double","required":true},
            "story": {"ref":"Story","required":true},
            "reaction": {"ref":"Reaction","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StoryInfo": {
        "dataType": "refObject",
        "properties": {
            "storyInfoId": {"dataType":"double","required":true},
            "title": {"dataType":"string","required":true},
            "bodyText": {"dataType":"string","required":true},
            "imgUrl": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "story": {"ref":"Story","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateStoryDTOUser": {
        "dataType": "refObject",
        "properties": {
            "userGuid": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateStoryDTOStoryInfo": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "bodyText": {"dataType":"string","required":true},
            "imgUrl": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateStoryDTO": {
        "dataType": "refObject",
        "properties": {
            "storyGuid": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "user": {"ref":"CreateStoryDTOUser","required":true},
            "storyInfo": {"ref":"CreateStoryDTOStoryInfo","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_StoryInfo_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"storyInfoId":{"dataType":"double"},"title":{"dataType":"string"},"bodyText":{"dataType":"string"},"imgUrl":{"dataType":"string"},"createdAt":{"dataType":"datetime"},"story":{"ref":"Story"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras"});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.post('/stories',
            ...(fetchMiddlewares<RequestHandler>(StoriesController)),
            ...(fetchMiddlewares<RequestHandler>(StoriesController.prototype.createStory)),

            function StoriesController_createStory(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateStoryDTO"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StoriesController();

              templateService.apiHandler({
                methodName: 'createStory',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/stories/:storyGuid',
            ...(fetchMiddlewares<RequestHandler>(StoriesController)),
            ...(fetchMiddlewares<RequestHandler>(StoriesController.prototype.updateStory)),

            function StoriesController_updateStory(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    storyGuid: {"in":"path","name":"storyGuid","required":true,"dataType":"string"},
                    storyData: {"in":"body","name":"storyData","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"storyInfos":{"dataType":"array","array":{"dataType":"refAlias","ref":"Partial_StoryInfo_"},"required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new StoriesController();

              templateService.apiHandler({
                methodName: 'updateStory',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
