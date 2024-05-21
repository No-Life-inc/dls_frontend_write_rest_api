[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/UserInfoDTO](../README.md) / UserInfoDTO

# Class: UserInfoDTO

Data Transfer Object (DTO) for UserInfo entity.

This DTO is used to transfer data related to a UserInfo entity.

## Remarks

This DTO contains information about a user's info, including its ID, first name,
last name, image URL, email, creation date, and details about the user.

## Constructors

### new UserInfoDTO()

> **new UserInfoDTO**(`userInfo`): [`UserInfoDTO`](UserInfoDTO.md)

Constructor for UserInfoDTO.

#### Parameters

• **userInfo**: [`UserInfo`](../../../entities/UserInfo/classes/UserInfo.md)

The UserInfo entity to create DTO from.

#### Returns

[`UserInfoDTO`](UserInfoDTO.md)

#### Source

[app/entities/DTOs/UserInfoDTO.ts:80](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserInfoDTO.ts#L80)

## Properties

### createdAt

> **createdAt**: `Date`

The creation date of the user's info.

#### Source

[app/entities/DTOs/UserInfoDTO.ts:65](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserInfoDTO.ts#L65)

***

### email

> **email**: `string`

The email of the user.

#### Optional

#### Source

[app/entities/DTOs/UserInfoDTO.ts:58](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserInfoDTO.ts#L58)

***

### firstName

> **firstName**: `string`

The first name of the user.

#### Optional

#### Source

[app/entities/DTOs/UserInfoDTO.ts:31](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserInfoDTO.ts#L31)

***

### imgUrl

> **imgUrl**: `string`

The URL of the image associated with the user.

#### Optional

#### Source

[app/entities/DTOs/UserInfoDTO.ts:49](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserInfoDTO.ts#L49)

***

### lastName

> **lastName**: `string`

The last name of the user.

#### Optional

#### Source

[app/entities/DTOs/UserInfoDTO.ts:40](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserInfoDTO.ts#L40)

***

### user

> **user**: [`UserDTO`](../../UserDTO/classes/UserDTO.md)

Details about the user.

#### Nested

#### Source

[app/entities/DTOs/UserInfoDTO.ts:74](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserInfoDTO.ts#L74)

***

### userInfoId

> **userInfoId**: `number`

The ID of the user's info.

#### Optional

#### Source

[app/entities/DTOs/UserInfoDTO.ts:22](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserInfoDTO.ts#L22)
