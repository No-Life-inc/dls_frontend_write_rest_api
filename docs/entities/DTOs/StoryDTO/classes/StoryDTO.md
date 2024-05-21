[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/StoryDTO](../README.md) / StoryDTO

# Class: StoryDTO

Data Transfer Object (DTO) for Story entity.

This DTO is used to transfer data related to a Story entity.

## Remarks

This DTO contains information about a story, including its ID, GUID, creation date,
comments, reactions, user, story info, and story reactions.

## Constructors

### new StoryDTO()

> **new StoryDTO**(`story`, `createComments`): [`StoryDTO`](StoryDTO.md)

Constructor for StoryDTO.

#### Parameters

• **story**: [`Story`](../../../entities/Story/classes/Story.md)

The Story entity to create DTO from.

• **createComments**: `boolean`= `true`

Flag indicating whether to create comment DTOs.

#### Returns

[`StoryDTO`](StoryDTO.md)

#### Source

[app/entities/DTOs/StoryDTO.ts:95](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L95)

## Properties

### comments

> **comments**: [`CommentDTO`](../../CommentDTO/classes/CommentDTO.md)[]

List of comments associated with the story.

#### Nested

#### Source

[app/entities/DTOs/StoryDTO.ts:52](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L52)

***

### createdAt

> **createdAt**: `Date`

The creation date of the story.

#### Source

[app/entities/DTOs/StoryDTO.ts:43](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L43)

***

### reactions

> **reactions**: [`ReactionDTO`](../../ReactionDTO/classes/ReactionDTO.md)[]

List of reactions received by the story.

#### Nested

#### Source

[app/entities/DTOs/StoryDTO.ts:61](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L61)

***

### storyGuid

> **storyGuid**: `string`

The GUID of the story.

#### Optional

#### Source

[app/entities/DTOs/StoryDTO.ts:36](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L36)

***

### storyId

> **storyId**: `number`

The ID of the story.

#### Optional

#### Source

[app/entities/DTOs/StoryDTO.ts:27](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L27)

***

### storyInfo

> **storyInfo**: [`StoryInfoDTO`](../../StoryInfoDTO/classes/StoryInfoDTO.md)

Information about the story.

#### Nested

#### Source

[app/entities/DTOs/StoryDTO.ts:79](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L79)

***

### storyReactions

> **storyReactions**: [`StoryReactionDTO`](../../StoryReactionDTO/classes/StoryReactionDTO.md)[]

Reactions received by the story.

#### Nested

#### Source

[app/entities/DTOs/StoryDTO.ts:88](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L88)

***

### user

> **user**: [`UserDTO`](../../UserDTO/classes/UserDTO.md)

The user who created the story.

#### Nested

#### Source

[app/entities/DTOs/StoryDTO.ts:70](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryDTO.ts#L70)
