[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [config/ormconfig](../README.md) / default

# Variable: default

> `const` **default**: `DataSource`

Represents a data source configuration for connecting to a Microsoft SQL Server database.

The DataSource object is configured with connection details retrieved from environment variables.

## Remarks

The following environment variables are used:
- MSSERVER: The host of the database server.
- DB_PORT: The port number of the database server. If not provided, defaults to 1433.
- MSUSER: The username for authentication.
- MSPW: The password for authentication.
- MSDB: The name of the database to connect to.

## Source

[app/config/ormconfig.ts:20](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/config/ormconfig.ts#L20)
