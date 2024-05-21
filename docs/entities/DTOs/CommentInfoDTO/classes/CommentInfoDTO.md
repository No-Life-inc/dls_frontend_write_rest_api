[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/CommentInfoDTO](../README.md) / CommentInfoDTO

# Class: CommentInfoDTO

Data Transfer Object (DTO) for CommentInfo entity.

This DTO is used to transfer data related to a CommentInfo entity.

## Remarks

This DTO contains information about a comment info, including its ID, body text,
creation date, and associated comment ID.

## Constructors

### new CommentInfoDTO()

> **new CommentInfoDTO**(`commentInfo`): [`CommentInfoDTO`](CommentInfoDTO.md)

Constructor for CommentInfoDTO.

#### Parameters

• **commentInfo**: [`CommentInfo`](../../../entities/CommentInfo/classes/CommentInfo.md)

The CommentInfo entity to create DTO from.

#### Returns

[`CommentInfoDTO`](CommentInfoDTO.md)

#### Source

[app/entities/DTOs/CommentInfoDTO.ts:51](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentInfoDTO.ts#L51)

## Properties

### bodyText

> **bodyText**: `string`

The body text of the comment info.

#### Optional

#### Source

[app/entities/DTOs/CommentInfoDTO.ts:29](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentInfoDTO.ts#L29)

***

### commentId

> **commentId**: `number`

The ID of the associated comment.

#### Source

[app/entities/DTOs/CommentInfoDTO.ts:45](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentInfoDTO.ts#L45)

***

### commentInfoId

> **commentInfoId**: `number`

The ID of the comment info.

#### Optional

#### Source

[app/entities/DTOs/CommentInfoDTO.ts:20](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentInfoDTO.ts#L20)

***

### createdAt

> **createdAt**: `Date`

The creation date of the comment info.

#### Optional

#### Source

[app/entities/DTOs/CommentInfoDTO.ts:38](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentInfoDTO.ts#L38)
