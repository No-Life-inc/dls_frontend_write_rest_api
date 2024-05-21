[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/CommentReactionDTO](../README.md) / CommentReactionDTO

# Class: CommentReactionDTO

Data Transfer Object (DTO) for CommentReaction entity.

This DTO is used to transfer data related to a CommentReaction entity.

## Remarks

This DTO contains information about a comment reaction, including its ID,
associated comment, and reaction.

## Constructors

### new CommentReactionDTO()

> **new CommentReactionDTO**(`commentReaction`): [`CommentReactionDTO`](CommentReactionDTO.md)

Constructor for CommentReactionDTO.

#### Parameters

• **commentReaction**: [`CommentReaction`](../../../entities/CommentReaction/classes/CommentReaction.md)

The CommentReaction entity to create DTO from.

#### Returns

[`CommentReactionDTO`](CommentReactionDTO.md)

#### Source

[app/entities/DTOs/CommentReactionDTO.ts:47](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentReactionDTO.ts#L47)

## Properties

### comment

> **comment**: [`CommentDTO`](../../CommentDTO/classes/CommentDTO.md)

The comment associated with this reaction.

#### Nested

#### Source

[app/entities/DTOs/CommentReactionDTO.ts:32](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentReactionDTO.ts#L32)

***

### commentReactionId

> **commentReactionId**: `number`

The ID of the comment reaction.

#### Optional

#### Source

[app/entities/DTOs/CommentReactionDTO.ts:23](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentReactionDTO.ts#L23)

***

### reaction

> **reaction**: [`ReactionDTO`](../../ReactionDTO/classes/ReactionDTO.md)

The reaction associated with this comment.

#### Nested

#### Source

[app/entities/DTOs/CommentReactionDTO.ts:41](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/CommentReactionDTO.ts#L41)
