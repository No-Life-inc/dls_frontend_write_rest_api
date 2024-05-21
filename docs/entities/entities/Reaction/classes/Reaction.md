[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/Reaction](../README.md) / Reaction

# Class: Reaction

Represents the Reaction entity in the database.

## Remarks

This entity represents reactions made by users on comments and stories.

## Constructors

### new Reaction()

> **new Reaction**(): [`Reaction`](Reaction.md)

#### Returns

[`Reaction`](Reaction.md)

## Properties

### commentReactions

> **commentReactions**: [`CommentReaction`](../../CommentReaction/classes/CommentReaction.md)[]

The comment reactions associated with the reaction.

#### Source

[app/entities/entities/Reaction.ts:39](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Reaction.ts#L39)

***

### reactionId

> **reactionId**: `number`

The primary key of the Reaction entity.

#### Source

[app/entities/entities/Reaction.ts:29](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Reaction.ts#L29)

***

### reactionType

> **reactionType**: [`ReactionType`](../../ReactionType/classes/ReactionType.md)

The type of reaction.

#### Source

[app/entities/entities/Reaction.ts:65](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Reaction.ts#L65)

***

### story

> **story**: [`Story`](../../Story/classes/Story.md)

The story on which the reaction was made.

#### Source

[app/entities/entities/Reaction.ts:55](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Reaction.ts#L55)

***

### storyReactions

> **storyReactions**: [`StoryReaction`](../../StoryReaction/classes/StoryReaction.md)[]

The reactions made on stories associated with the reaction.

#### Source

[app/entities/entities/Reaction.ts:72](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Reaction.ts#L72)

***

### user

> **user**: [`User`](../../User/classes/User.md)

The user who made the reaction.

#### Source

[app/entities/entities/Reaction.ts:47](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Reaction.ts#L47)
