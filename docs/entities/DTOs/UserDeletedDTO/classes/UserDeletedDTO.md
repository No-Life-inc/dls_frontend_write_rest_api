[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/UserDeletedDTO](../README.md) / UserDeletedDTO

# Class: UserDeletedDTO

Data Transfer Object (DTO) for UserDeleted entity.

This DTO is used to transfer data related to a deleted user entity.

## Remarks

This DTO contains information about a deleted user, including its ID, creation date,
and details about the user.

## Constructors

### new UserDeletedDTO()

> **new UserDeletedDTO**(`user`): [`UserDeletedDTO`](UserDeletedDTO.md)

Constructor for UserDeletedDTO.

#### Parameters

• **user**: [`User`](../../../entities/User/classes/User.md)

The User entity representing the deleted user.

#### Returns

[`UserDeletedDTO`](UserDeletedDTO.md)

#### Source

[app/entities/DTOs/UserDeletedDTO.ts:46](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDeletedDTO.ts#L46)

## Properties

### createdAt

> **createdAt**: `Date`

The creation date of the deleted user.

#### Optional

#### Source

[app/entities/DTOs/UserDeletedDTO.ts:31](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDeletedDTO.ts#L31)

***

### user

> **user**: [`UserDTO`](../../UserDTO/classes/UserDTO.md)

Details about the deleted user.

#### Nested

#### Source

[app/entities/DTOs/UserDeletedDTO.ts:40](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDeletedDTO.ts#L40)

***

### userId

> **userId**: `number`

The ID of the deleted user.

#### Optional

#### Source

[app/entities/DTOs/UserDeletedDTO.ts:22](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDeletedDTO.ts#L22)
