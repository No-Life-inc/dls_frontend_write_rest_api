[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [rabbitMQ/deleteComment](../README.md) / deleteComment

# Function: deleteComment()

> **deleteComment**(`commentGuid`): `void`

Deletes a comment by publishing a message to the RabbitMQ queue for processing.

## Parameters

• **commentGuid**: `string`

The GUID of the comment to be deleted.

## Returns

`void`

## Remarks

This function publishes a message containing the comment GUID to the RabbitMQ queue named "delete_comment".

## Source

[app/rabbitMQ/deleteComment.ts:12](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/deleteComment.ts#L12)
