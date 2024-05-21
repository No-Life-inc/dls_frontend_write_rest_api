[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [rabbitMQ/updateStoryInfo](../README.md) / updateStoryInfo

# Function: updateStoryInfo()

> **updateStoryInfo**(`storyGuid`, `updatedStoryInfo`): `void`

Updates the information of a story and publishes the update to a RabbitMQ queue.

## Parameters

• **storyGuid**: `String`

The GUID of the story to update.

• **updatedStoryInfo**: `Partial`\<[`StoryInfo`](../../../entities/entities/StoryInfo/classes/StoryInfo.md)\>

The updated story information.

## Returns

`void`

## Source

[app/rabbitMQ/updateStoryInfo.ts:13](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/updateStoryInfo.ts#L13)
