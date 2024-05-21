[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [rabbitMQ/setupRabbit](../README.md) / QueueManager

# Class: QueueManager

Singleton class to manage RabbitMQ channels

## Methods

### getChannel()

> **getChannel**(`queueName`): `Channel`

Gets a RabbitMQ channel by its name.

#### Parameters

• **queueName**: `string`

The name of the queue associated with the channel.

#### Returns

`Channel`

- The RabbitMQ channel, or undefined if not found.

#### Source

[app/rabbitMQ/setupRabbit.ts:75](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/setupRabbit.ts#L75)

***

### setupQueue()

> **setupQueue**(`queueName`): `Promise`\<`Channel`\>

Sets up a RabbitMQ queue with the specified name.

#### Parameters

• **queueName**: `string`

The name of the queue to set up.

#### Returns

`Promise`\<`Channel`\>

- A promise that resolves to a RabbitMQ channel.

#### Source

[app/rabbitMQ/setupRabbit.ts:45](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/setupRabbit.ts#L45)

***

### getInstance()

> `static` **getInstance**(): [`QueueManager`](QueueManager.md)

Gets the singleton instance of the QueueManager.

#### Returns

[`QueueManager`](QueueManager.md)

The QueueManager instance.

#### Source

[app/rabbitMQ/setupRabbit.ts:32](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/rabbitMQ/setupRabbit.ts#L32)
