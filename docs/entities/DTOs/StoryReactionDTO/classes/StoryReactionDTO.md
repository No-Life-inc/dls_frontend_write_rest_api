[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/StoryReactionDTO](../README.md) / StoryReactionDTO

# Class: StoryReactionDTO

Data Transfer Object (DTO) for StoryReaction entity.

This DTO is used to transfer data related to a StoryReaction entity.

## Remarks

This DTO contains information about a story reaction, including its ID and the ID
of the reaction associated with it.

## Constructors

### new StoryReactionDTO()

> **new StoryReactionDTO**(`storyReaction`): [`StoryReactionDTO`](StoryReactionDTO.md)

Constructor for StoryReactionDTO.

#### Parameters

• **storyReaction**: [`StoryReaction`](../../../entities/StoryReaction/classes/StoryReaction.md)

The StoryReaction entity to create DTO from.

#### Returns

[`StoryReactionDTO`](StoryReactionDTO.md)

#### Source

[app/entities/DTOs/StoryReactionDTO.ts:32](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryReactionDTO.ts#L32)

## Properties

### reactionId

> **reactionId**: `number`

The ID of the reaction associated with the story.

#### Source

[app/entities/DTOs/StoryReactionDTO.ts:26](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryReactionDTO.ts#L26)

***

### storyId

> **storyId**: `number`

The ID of the story.

#### Source

[app/entities/DTOs/StoryReactionDTO.ts:19](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryReactionDTO.ts#L19)
