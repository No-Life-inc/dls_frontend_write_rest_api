[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [rabbitMQ/updateCommentInfo](../README.md) / updateCommentInfo

# Function: updateCommentInfo()

> **updateCommentInfo**(`commentGuid`, `updatedCommentInfo`): `void`

Updates the information of a comment and publishes the update to a RabbitMQ queue.

## Parameters

• **commentGuid**: `String`

The GUID of the comment to update.

• **updatedCommentInfo**: `Partial`\<[`CommentInfo`](../../../entities/entities/CommentInfo/classes/CommentInfo.md)\>

The updated comment information.

## Returns

`void`

## Source

[app/rabbitMQ/updateCommentInfo.ts:12](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/updateCommentInfo.ts#L12)
