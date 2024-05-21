[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/UserInfo](../README.md) / UserInfo

# Class: UserInfo

Represents user information stored in the database.

## Remarks

This entity stores additional information about users, such as their first name, last name, profile image URL, and email.

## Constructors

### new UserInfo()

> **new UserInfo**(): [`UserInfo`](UserInfo.md)

#### Returns

[`UserInfo`](UserInfo.md)

## Properties

### createdAt

> **createdAt**: `Date`

The date and time when the user information was created.

#### Source

[app/entities/entities/UserInfo.ts:60](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserInfo.ts#L60)

***

### email

> **email**: `string`

The email address of the user.

#### Source

[app/entities/entities/UserInfo.ts:53](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserInfo.ts#L53)

***

### firstName

> **firstName**: `string`

The first name of the user.

#### Source

[app/entities/entities/UserInfo.ts:32](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserInfo.ts#L32)

***

### imgUrl

> **imgUrl**: `string`

The URL of the user's profile image.

#### Source

[app/entities/entities/UserInfo.ts:46](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserInfo.ts#L46)

***

### lastName

> **lastName**: `string`

The last name of the user.

#### Source

[app/entities/entities/UserInfo.ts:39](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserInfo.ts#L39)

***

### user

> **user**: [`User`](../../User/classes/User.md)

The reference to the user associated with this user information.

#### Source

[app/entities/entities/UserInfo.ts:68](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserInfo.ts#L68)

***

### userInfoId

> **userInfoId**: `number`

The primary key of the UserInfo entity, representing the ID of the user information.

#### Source

[app/entities/entities/UserInfo.ts:25](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserInfo.ts#L25)
