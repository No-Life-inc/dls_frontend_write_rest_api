[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [db/dbOperations](../README.md) / getUserById

# Function: getUserById()

> **getUserById**(`pool`, `user_guid`): `Promise`\<`any`\>

Retrieves a specific user by their user_guid from the database.

## Parameters

• **pool**: `any`

The connection pool for database connections.

• **user\_guid**: `any`

The unique identifier of the user.

## Returns

`Promise`\<`any`\>

A promise that resolves to a user object.

## Source

[app/db/dbOperations.ts:9](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/db/dbOperations.ts#L9)
