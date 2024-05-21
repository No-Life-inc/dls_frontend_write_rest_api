[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/Blocked](../README.md) / Blocked

# Class: Blocked

Represents the Blocked entity in the database.

## Remarks

This entity represents users who are blocked by other users.

## Constructors

### new Blocked()

> **new Blocked**(): [`Blocked`](Blocked.md)

#### Returns

[`Blocked`](Blocked.md)

## Properties

### blocked

> **blocked**: [`User`](../../User/classes/User.md)[]

The users who blocked others.

#### Source

[app/entities/entities/Blocked.ts:45](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Blocked.ts#L45)

***

### blockedId

> **blockedId**: `number`

The primary key of the Blocked entity.

#### Source

[app/entities/entities/Blocked.ts:24](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Blocked.ts#L24)

***

### createdAt

> **createdAt**: `Date`

The creation date of the blocked entity.

#### Source

[app/entities/entities/Blocked.ts:31](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Blocked.ts#L31)

***

### users

> **users**: [`User`](../../User/classes/User.md)[]

The users who are blocked by others.

#### Source

[app/entities/entities/Blocked.ts:38](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Blocked.ts#L38)
