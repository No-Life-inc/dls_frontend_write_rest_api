[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/CommentReaction](../README.md) / CommentReaction

# Class: CommentReaction

Represents the CommentReaction entity in the database.

## Remarks

This entity represents reactions made on comments.

## Constructors

### new CommentReaction()

> **new CommentReaction**(): [`CommentReaction`](CommentReaction.md)

#### Returns

[`CommentReaction`](CommentReaction.md)

## Properties

### comment

> **comment**: [`Comment`](../../Comment/classes/Comment.md)

The comment associated with the reaction.

#### Source

[app/entities/entities/CommentReaction.ts:35](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/CommentReaction.ts#L35)

***

### commentReactionId

> **commentReactionId**: `number`

The primary key of the CommentReaction entity.

#### Source

[app/entities/entities/CommentReaction.ts:27](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/CommentReaction.ts#L27)

***

### reaction

> **reaction**: [`Reaction`](../../Reaction/classes/Reaction.md)

The reaction associated with the comment.

#### Source

[app/entities/entities/CommentReaction.ts:43](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/CommentReaction.ts#L43)
