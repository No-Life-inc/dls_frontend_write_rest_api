[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/StoryReaction](../README.md) / StoryReaction

# Class: StoryReaction

Represents the association between a story and a reaction in the database.

## Remarks

This entity represents the relationship between a story and a reaction, indicating that a particular reaction was made on a specific story.

## Constructors

### new StoryReaction()

> **new StoryReaction**(): [`StoryReaction`](StoryReaction.md)

#### Returns

[`StoryReaction`](StoryReaction.md)

## Properties

### reaction

> **reaction**: [`Reaction`](../../Reaction/classes/Reaction.md)

The reaction associated with this story reaction.

#### Source

[app/entities/entities/StoryReaction.ts:41](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/StoryReaction.ts#L41)

***

### story

> **story**: [`Story`](../../Story/classes/Story.md)

The story associated with this story reaction.

#### Source

[app/entities/entities/StoryReaction.ts:33](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/StoryReaction.ts#L33)

***

### storyReactionId

> **storyReactionId**: `number`

The primary key of the StoryReaction entity.

#### Source

[app/entities/entities/StoryReaction.ts:25](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/StoryReaction.ts#L25)
