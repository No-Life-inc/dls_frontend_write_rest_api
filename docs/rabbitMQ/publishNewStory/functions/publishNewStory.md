[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [rabbitMQ/publishNewStory](../README.md) / publishNewStory

# Function: publishNewStory()

> **publishNewStory**(`story`): `void`

Publishes a new story to a RabbitMQ queue for processing.

## Parameters

• **story**: [`StoryDTO`](../../../entities/DTOs/StoryDTO/classes/StoryDTO.md)

The StoryDTO object representing the new story.

## Returns

`void`

## Remarks

This function publishes a StoryDTO object to the RabbitMQ queue named "new_stories".

## Source

[app/rabbitMQ/publishNewStory.ts:16](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/publishNewStory.ts#L16)
