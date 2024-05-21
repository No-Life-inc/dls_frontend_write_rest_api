[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/Comment](../README.md) / Comment

# Class: Comment

Represents the Comment entity in the database.

## Remarks

This entity represents comments made by users on stories.

## Constructors

### new Comment()

> **new Comment**(`dto`?): [`Comment`](Comment.md)

Constructor for Comment entity.

#### Parameters

• **dto?**: [`CommentDTO`](../../../DTOs/CommentDTO/classes/CommentDTO.md)

The CommentDTO object to create the entity from.

#### Returns

[`Comment`](Comment.md)

#### Source

[app/entities/entities/Comment.ts:30](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Comment.ts#L30)

## Properties

### commentGuid

> **commentGuid**: `string`

The GUID of the comment.

#### Source

[app/entities/entities/Comment.ts:58](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Comment.ts#L58)

***

### commentId

> **commentId**: `number`

The primary key of the Comment entity.

#### Source

[app/entities/entities/Comment.ts:51](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Comment.ts#L51)

***

### commentInfos

> **commentInfos**: [`CommentInfo`](../../CommentInfo/classes/CommentInfo.md)[]

The comment information associated with the comment.

#### Source

[app/entities/entities/Comment.ts:72](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Comment.ts#L72)

***

### commentReactions

> **commentReactions**: [`CommentReaction`](../../CommentReaction/classes/CommentReaction.md)[]

The reactions made on the comment.

#### Source

[app/entities/entities/Comment.ts:79](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Comment.ts#L79)

***

### createdAt

> **createdAt**: `Date`

The creation date of the comment.

#### Source

[app/entities/entities/Comment.ts:65](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Comment.ts#L65)

***

### story

> **story**: [`Story`](../../Story/classes/Story.md)

The story on which the comment was made.

#### Source

[app/entities/entities/Comment.ts:95](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Comment.ts#L95)

***

### user

> **user**: [`User`](../../User/classes/User.md)

The user who made the comment.

#### Source

[app/entities/entities/Comment.ts:87](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Comment.ts#L87)
