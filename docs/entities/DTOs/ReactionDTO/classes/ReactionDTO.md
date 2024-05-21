[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/ReactionDTO](../README.md) / ReactionDTO

# Class: ReactionDTO

Data Transfer Object (DTO) for Reaction entity.

This DTO is used to transfer data related to a Reaction entity.

## Remarks

This DTO contains information about a reaction, including the IDs of the user,
story, and reaction type associated with it.

## Constructors

### new ReactionDTO()

> **new ReactionDTO**(`reaction`): [`ReactionDTO`](ReactionDTO.md)

Constructor for ReactionDTO.

#### Parameters

• **reaction**: [`Reaction`](../../../entities/Reaction/classes/Reaction.md)

The Reaction entity to create DTO from.

#### Returns

[`ReactionDTO`](ReactionDTO.md)

#### Source

[app/entities/DTOs/ReactionDTO.ts:45](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/ReactionDTO.ts#L45)

## Properties

### reactionTypeId

> **reactionTypeId**: `number`

The ID of the reaction type.

#### Optional

#### Source

[app/entities/DTOs/ReactionDTO.ts:39](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/ReactionDTO.ts#L39)

***

### storyId

> **storyId**: `number`

The ID of the story to which the reaction is made.

#### Optional

#### Source

[app/entities/DTOs/ReactionDTO.ts:30](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/ReactionDTO.ts#L30)

***

### userId

> **userId**: `number`

The ID of the user who made the reaction.

#### Optional

#### Source

[app/entities/DTOs/ReactionDTO.ts:21](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/ReactionDTO.ts#L21)
