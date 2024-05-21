[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/Story](../README.md) / Story

# Class: Story

Represents the Story entity in the database.

## Remarks

This entity represents a story created by a user.

## Constructors

### new Story()

> **new Story**(`dto`?): [`Story`](Story.md)

#### Parameters

• **dto?**: [`StoryDTO`](../../../DTOs/StoryDTO/classes/StoryDTO.md)

#### Returns

[`Story`](Story.md)

#### Source

[app/entities/entities/Story.ts:28](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L28)

## Properties

### comments

> **comments**: [`Comment`](../../Comment/classes/Comment.md)[]

The comments associated with this story.

#### Source

[app/entities/entities/Story.ts:70](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L70)

***

### createdAt

> **createdAt**: `Date`

The date and time the story was created.

#### Source

[app/entities/entities/Story.ts:63](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L63)

***

### reactions

> **reactions**: [`Reaction`](../../Reaction/classes/Reaction.md)[]

The reactions associated with this story.

#### Source

[app/entities/entities/Story.ts:77](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L77)

***

### storyGuid

> **storyGuid**: `string`

The GUID of the story.

#### Source

[app/entities/entities/Story.ts:56](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L56)

***

### storyId

> **storyId**: `number`

The primary key of the Story entity.

#### Source

[app/entities/entities/Story.ts:49](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L49)

***

### storyInfos

> **storyInfos**: [`StoryInfo`](../../StoryInfo/classes/StoryInfo.md)[]

The information associated with this story.

#### Source

[app/entities/entities/Story.ts:92](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L92)

***

### storyReactions

> **storyReactions**: [`StoryReaction`](../../StoryReaction/classes/StoryReaction.md)[]

The reactions associated with this story.

#### Source

[app/entities/entities/Story.ts:99](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L99)

***

### user

> **user**: [`User`](../../User/classes/User.md)

The user who created the story.

#### Source

[app/entities/entities/Story.ts:85](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Story.ts#L85)
