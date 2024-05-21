[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/Friend](../README.md) / Friend

# Class: Friend

Represents the Friend entity in the database.

## Remarks

This entity represents friendships between users.

## Constructors

### new Friend()

> **new Friend**(): [`Friend`](Friend.md)

#### Returns

[`Friend`](Friend.md)

## Properties

### createdAt

> **createdAt**: `Date`

The creation date of the friendship.

#### Source

[app/entities/entities/Friend.ts:31](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Friend.ts#L31)

***

### friends

> **friends**: [`User`](../../User/classes/User.md)[]

The friends of the user.

#### Source

[app/entities/entities/Friend.ts:45](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Friend.ts#L45)

***

### friendship\_id

> **friendship\_id**: `number`

The primary key of the Friend entity.

#### Source

[app/entities/entities/Friend.ts:24](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Friend.ts#L24)

***

### users

> **users**: [`User`](../../User/classes/User.md)[]

The users involved in the friendship.

#### Source

[app/entities/entities/Friend.ts:38](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/Friend.ts#L38)
