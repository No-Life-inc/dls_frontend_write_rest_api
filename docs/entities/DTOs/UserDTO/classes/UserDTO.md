[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/UserDTO](../README.md) / UserDTO

# Class: UserDTO

Data Transfer Object (DTO) for User entity.

This DTO is used to transfer data related to a User entity.

## Remarks

This DTO contains information about a user, including its ID, GUID, creation date,
user info, comments, reactions, stories, blocked users, and friends.

## Constructors

### new UserDTO()

> **new UserDTO**(`user`?): [`UserDTO`](UserDTO.md)

Constructor for UserDTO.

#### Parameters

• **user?**: [`User`](../../../entities/User/classes/User.md)

The User entity to create DTO from.

#### Returns

[`UserDTO`](UserDTO.md)

#### Source

[app/entities/DTOs/UserDTO.ts:122](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L122)

## Properties

### blocked

> **blocked**: [`BlockedDTO`](../../BlockedDTO/classes/BlockedDTO.md)[]

List of users blocked by the user.

#### Nested

#### Source

[app/entities/DTOs/UserDTO.ts:98](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L98)

***

### blockedBy

> **blockedBy**: [`BlockedDTO`](../../BlockedDTO/classes/BlockedDTO.md)[]

List of users who blocked the user.

#### Nested

#### Source

[app/entities/DTOs/UserDTO.ts:89](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L89)

***

### comments

> **comments**: [`CommentDTO`](../../CommentDTO/classes/CommentDTO.md)[]

List of comments made by the user.

#### Nested

#### Source

[app/entities/DTOs/UserDTO.ts:62](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L62)

***

### createdAt

> **createdAt**: `Date`

The creation date of the user.

#### Source

[app/entities/DTOs/UserDTO.ts:44](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L44)

***

### friends

> **friends**: [`FriendDTO`](../../FriendDTO/classes/FriendDTO.md)[]

List of users who consider the user as a friend.

#### Nested

#### Source

[app/entities/DTOs/UserDTO.ts:116](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L116)

***

### reactions

> **reactions**: [`ReactionDTO`](../../ReactionDTO/classes/ReactionDTO.md)[]

List of reactions made by the user.

#### Nested

#### Source

[app/entities/DTOs/UserDTO.ts:71](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L71)

***

### stories

> **stories**: [`StoryDTO`](../../StoryDTO/classes/StoryDTO.md)[]

List of stories created by the user.

#### Nested

#### Source

[app/entities/DTOs/UserDTO.ts:80](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L80)

***

### user

> **user**: [`FriendDTO`](../../FriendDTO/classes/FriendDTO.md)[]

List of user's friends.

#### Nested

#### Source

[app/entities/DTOs/UserDTO.ts:107](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L107)

***

### userGuid

> **userGuid**: `string`

The GUID of the user.

#### Optional

#### Source

[app/entities/DTOs/UserDTO.ts:37](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L37)

***

### userId

> **userId**: `number`

The ID of the user.

#### Optional

#### Source

[app/entities/DTOs/UserDTO.ts:28](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L28)

***

### userInfo

> **userInfo**: [`UserInfoDTO`](../../UserInfoDTO/classes/UserInfoDTO.md)

Information about the user.

#### Nested

#### Source

[app/entities/DTOs/UserDTO.ts:53](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/UserDTO.ts#L53)
