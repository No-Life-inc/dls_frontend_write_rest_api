[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/User](../README.md) / User

# Class: User

Represents a user entity in the database.

## Remarks

This entity represents a user, who can create comments, reactions, stories, and have connections with other users.

## Extends

- `BaseEntity`

## Constructors

### new User()

> **new User**(): [`User`](User.md)

#### Returns

[`User`](User.md)

#### Inherited from

`BaseEntity.constructor`

## Properties

### blocked

> **blocked**: [`Blocked`](../../Blocked/classes/Blocked.md)[]

Users blocked by this user.

#### Source

[app/entities/entities/User.ts:84](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L84)

***

### blockedBy

> **blockedBy**: [`Blocked`](../../Blocked/classes/Blocked.md)[]

Users blocked by this user.

#### Source

[app/entities/entities/User.ts:76](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L76)

***

### comments

> **comments**: [`Comment`](../../Comment/classes/Comment.md)[]

Comments made by this user.

#### Source

[app/entities/entities/User.ts:54](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L54)

***

### createdAt

> **createdAt**: `Date`

The date and time when the user was created.

#### Source

[app/entities/entities/User.ts:47](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L47)

***

### friends

> **friends**: [`Friend`](../../Friend/classes/Friend.md)[]

Users connected to this user as friends.

#### Source

[app/entities/entities/User.ts:100](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L100)

***

### reactions

> **reactions**: [`Reaction`](../../Reaction/classes/Reaction.md)[]

Reactions made by this user.

#### Source

[app/entities/entities/User.ts:61](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L61)

***

### stories

> **stories**: [`Story`](../../Story/classes/Story.md)[]

Stories created by this user.

#### Source

[app/entities/entities/User.ts:68](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L68)

***

### user

> **user**: [`Friend`](../../Friend/classes/Friend.md)[]

Users connected to this user as friends.

#### Source

[app/entities/entities/User.ts:92](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L92)

***

### userGuid

> **userGuid**: `string`

The GUID of the user.

#### Source

[app/entities/entities/User.ts:40](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L40)

***

### userId

> **userId**: `number`

The primary key of the User entity.

#### Source

[app/entities/entities/User.ts:33](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L33)

***

### userInfos

> **userInfos**: [`UserInfo`](../../UserInfo/classes/UserInfo.md)[]

Additional information about this user.

#### Source

[app/entities/entities/User.ts:107](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/User.ts#L107)
