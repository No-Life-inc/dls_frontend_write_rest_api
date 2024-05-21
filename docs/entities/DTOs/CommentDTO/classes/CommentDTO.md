[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/CommentDTO](../README.md) / CommentDTO

# Class: CommentDTO

Data Transfer Object (DTO) for Comment entity.

This DTO is used to transfer data related to a Comment entity.

## Remarks

This DTO contains information about a comment, including its ID, GUID,
creation date, associated comment infos, reactions, user, and story.

## Constructors

### new CommentDTO()

> **new CommentDTO**(`comment`): [`CommentDTO`](CommentDTO.md)

Constructor for CommentDTO.

#### Parameters

• **comment**: [`Comment`](../../../entities/Comment/classes/Comment.md)

The Comment entity to create DTO from.

#### Returns

[`CommentDTO`](CommentDTO.md)

#### Source

[app/entities/DTOs/CommentDTO.ts:85](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentDTO.ts#L85)

## Properties

### commentGuid

> **commentGuid**: `string`

The GUID of the comment.

#### Optional

#### Source

[app/entities/DTOs/CommentDTO.ts:34](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentDTO.ts#L34)

***

### commentId

> **commentId**: `number`

The ID of the comment.

#### Optional

#### Source

[app/entities/DTOs/CommentDTO.ts:25](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentDTO.ts#L25)

***

### commentInfos

> **commentInfos**: [`CommentInfoDTO`](../../CommentInfoDTO/classes/CommentInfoDTO.md)[]

List of comment infos associated with this comment.

#### Nested

#### Source

[app/entities/DTOs/CommentDTO.ts:52](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentDTO.ts#L52)

***

### commentReactions

> **commentReactions**: [`CommentReactionDTO`](../../CommentReactionDTO/classes/CommentReactionDTO.md)[]

List of reactions received by this comment.

#### Nested

#### Source

[app/entities/DTOs/CommentDTO.ts:61](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentDTO.ts#L61)

***

### createdAt

> **createdAt**: `Date`

The creation date of the comment.

#### Optional

#### Source

[app/entities/DTOs/CommentDTO.ts:43](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentDTO.ts#L43)

***

### story

> **story**: [`StoryDTO`](../../StoryDTO/classes/StoryDTO.md)

The story to which this comment belongs.

#### Nested

#### Source

[app/entities/DTOs/CommentDTO.ts:79](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentDTO.ts#L79)

***

### user

> **user**: [`UserDTO`](../../UserDTO/classes/UserDTO.md)

The user who made this comment.

#### Nested

#### Source

[app/entities/DTOs/CommentDTO.ts:70](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentDTO.ts#L70)
