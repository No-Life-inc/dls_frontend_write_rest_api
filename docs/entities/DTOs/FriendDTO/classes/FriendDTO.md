[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/FriendDTO](../README.md) / FriendDTO

# Class: FriendDTO

Data Transfer Object (DTO) for Friend entity.

This DTO is used to transfer data related to a Friend entity.

## Remarks

This DTO contains information about a friendship, including its ID, creation date,
users involved in the friendship, and their friends.

## Constructors

### new FriendDTO()

> **new FriendDTO**(`friendship`): [`FriendDTO`](FriendDTO.md)

Constructor for FriendDTO.

#### Parameters

• **friendship**: [`Friend`](../../../entities/Friend/classes/Friend.md)

The Friend entity to create DTO from.

#### Returns

[`FriendDTO`](FriendDTO.md)

#### Source

[app/entities/DTOs/FriendDTO.ts:53](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/FriendDTO.ts#L53)

## Properties

### createdAt

> **createdAt**: `Date`

The creation date of the friendship.

#### Source

[app/entities/DTOs/FriendDTO.ts:29](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/FriendDTO.ts#L29)

***

### friends

> **friends**: [`UserDTO`](../../UserDTO/classes/UserDTO.md)[]

List of friends associated with the friendship.

#### Nested

#### Source

[app/entities/DTOs/FriendDTO.ts:47](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/FriendDTO.ts#L47)

***

### friendship\_id

> **friendship\_id**: `number`

The ID of the friendship.

#### Optional

#### Source

[app/entities/DTOs/FriendDTO.ts:22](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/FriendDTO.ts#L22)

***

### users

> **users**: [`UserDTO`](../../UserDTO/classes/UserDTO.md)[]

List of users involved in the friendship.

#### Nested

#### Source

[app/entities/DTOs/FriendDTO.ts:38](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/FriendDTO.ts#L38)
