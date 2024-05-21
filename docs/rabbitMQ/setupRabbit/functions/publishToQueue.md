[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [rabbitMQ/setupRabbit](../README.md) / publishToQueue

# Function: publishToQueue()

> **publishToQueue**(`message`, `channel`, `queueName`): `void`

Publishes a message to the specified queue.

## Parameters

• **message**: `any`

The message to publish.

• **channel**: `Channel`= `null`

The RabbitMQ channel to use for publishing.

• **queueName**: `string`

The name of the queue to publish to.

## Returns

`void`

## Source

[app/rabbitMQ/setupRabbit.ts:87](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/setupRabbit.ts#L87)
