[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [routes/comments](../README.md) / CommentsController

# Class: CommentsController

Controller for handling comments related endpoints.

## Constructors

### new CommentsController()

> **new CommentsController**(): [`CommentsController`](CommentsController.md)

#### Returns

[`CommentsController`](CommentsController.md)

## Methods

### createComment()

> **createComment**(`req`, `requestBody`): `Promise`\<[`CommentDTO`](../../../entities/DTOs/CommentDTO/classes/CommentDTO.md)\>

Endpoint to create a new comment.

#### Parameters

• **req**: `any`

The request object.

• **requestBody**: [`CreateCommentDTO`](../../../entities/interfaces/CreateCommentDTO/interfaces/CreateCommentDTO.md)

The request body containing the comment data.

#### Returns

`Promise`\<[`CommentDTO`](../../../entities/DTOs/CommentDTO/classes/CommentDTO.md)\>

A Promise resolving to the created comment DTO.

#### Source

[app/routes/comments.ts:30](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/routes/comments.ts#L30)

***

### deleteComment()

> **deleteComment**(`commentGuid`): `Promise`\<`any`\>

Endpoint to delete a comment by its GUID.

#### Parameters

• **commentGuid**: `string`

The GUID of the comment to delete.

#### Returns

`Promise`\<`any`\>

A Promise resolving to the result of the deletion.

#### Source

[app/routes/comments.ts:91](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/routes/comments.ts#L91)

***

### updateComment()

> **updateComment**(`commentGuid`, `commentData`): `Promise`\<`any`\>

Endpoint to update a comment by its GUID.

#### Parameters

• **commentGuid**: `string`

The GUID of the comment to update.

• **commentData**

The data to update the comment with.

• **commentData.commentInfo**: `Partial`\<[`CommentInfo`](../../../entities/entities/CommentInfo/classes/CommentInfo.md)\>

#### Returns

`Promise`\<`any`\>

A Promise resolving to the updated comment DTO.

#### Source

[app/routes/comments.ts:114](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/routes/comments.ts#L114)
