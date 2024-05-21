[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [rabbitMQ/deleteStory](../README.md) / deleteStory

# Function: deleteStory()

> **deleteStory**(`storyGuid`): `void`

Deletes a story by publishing a message to the RabbitMQ queue for processing.

## Parameters

• **storyGuid**: `String`

The GUID of the story to be deleted.

## Returns

`void`

## Remarks

This function publishes a message containing the story GUID to the RabbitMQ queue named "delete_story".

## Source

[app/rabbitMQ/deleteStory.ts:12](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/deleteStory.ts#L12)
