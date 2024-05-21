[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [rabbitMQ/publishNewComment](../README.md) / publishNewComment

# Function: publishNewComment()

> **publishNewComment**(`comment`): `void`

Publishes a new comment to a RabbitMQ queue for processing.

## Parameters

• **comment**: [`CommentDTO`](../../../entities/DTOs/CommentDTO/classes/CommentDTO.md)

The CommentDTO object representing the new comment.

## Returns

`void`

## Remarks

This function publishes a CommentDTO object to the RabbitMQ queue named "new_comments".

## Source

[app/rabbitMQ/publishNewComment.ts:13](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/publishNewComment.ts#L13)
