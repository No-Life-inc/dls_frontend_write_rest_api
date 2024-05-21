[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/BlockedDTO](../README.md) / BlockedDTO

# Class: BlockedDTO

Represents a Data Transfer Object (DTO) for Blocked entity.

This DTO is used to transfer data related to a Blocked entity.

## Remarks

This DTO is responsible for carrying data related to the Blocked entity,
including the ID, creation date, and lists of users and blocked users.

## Constructors

### new BlockedDTO()

> **new BlockedDTO**(`blocked`): [`BlockedDTO`](BlockedDTO.md)

Constructor for BlockedDTO.

#### Parameters

• **blocked**: [`Blocked`](../../../entities/Blocked/classes/Blocked.md)

The Blocked entity to create DTO from.

#### Returns

[`BlockedDTO`](BlockedDTO.md)

#### Source

[app/entities/DTOs/BlockedDTO.ts:53](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/BlockedDTO.ts#L53)

## Properties

### blocked

> **blocked**: [`UserDTO`](../../UserDTO/classes/UserDTO.md)[]

List of users who are blocked.

#### Nested

#### Source

[app/entities/DTOs/BlockedDTO.ts:47](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/BlockedDTO.ts#L47)

***

### blockedId

> **blockedId**: `number`

The ID of the blocked entry.

#### Optional

#### Source

[app/entities/DTOs/BlockedDTO.ts:22](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/BlockedDTO.ts#L22)

***

### createdAt

> **createdAt**: `Date`

The creation date of the blocked entry.

#### Source

[app/entities/DTOs/BlockedDTO.ts:29](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/BlockedDTO.ts#L29)

***

### users

> **users**: [`UserDTO`](../../UserDTO/classes/UserDTO.md)[]

List of users related to this blocked entry.

#### Nested

#### Source

[app/entities/DTOs/BlockedDTO.ts:38](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/BlockedDTO.ts#L38)
