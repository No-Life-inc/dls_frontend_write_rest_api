[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [db/dbConnect](../README.md) / connectToDb

# Function: connectToDb()

> **connectToDb**(): `Promise`\<`ConnectionPool`\>

Establishes a connection to the database using the provided configuration.

## Returns

`Promise`\<`ConnectionPool`\>

A promise that resolves to a SQL Connection Pool object representing the database connection.

## Remarks

This function utilizes the 'mssql' library to establish a connection to the database.
The database configuration is retrieved from the 'db_config' object exported from 'db-config.ts'.

## Source

[app/db/dbConnect.ts:13](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/db/dbConnect.ts#L13)
