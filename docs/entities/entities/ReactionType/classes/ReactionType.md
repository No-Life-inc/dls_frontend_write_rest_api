[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/ReactionType](../README.md) / ReactionType

# Class: ReactionType

Represents the ReactionType entity in the database.

## Remarks

This entity represents different types of reactions.

## Constructors

### new ReactionType()

> **new ReactionType**(): [`ReactionType`](ReactionType.md)

#### Returns

[`ReactionType`](ReactionType.md)

## Properties

### reactionTypeId

> **reactionTypeId**: `number`

The primary key of the ReactionType entity.

#### Source

[app/entities/entities/ReactionType.ts:24](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/ReactionType.ts#L24)

***

### reactionTypeImg

> **reactionTypeImg**: `string`

The URL of the image representing the reaction type.

#### Source

[app/entities/entities/ReactionType.ts:46](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/ReactionType.ts#L46)

***

### reactionTypeName

> **reactionTypeName**: `string`

The name of the reaction type.

#### Source

[app/entities/entities/ReactionType.ts:35](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/ReactionType.ts#L35)

***

### reactions

> **reactions**: [`Reaction`](../../Reaction/classes/Reaction.md)[]

The reactions associated with this reaction type.

#### Source

[app/entities/entities/ReactionType.ts:53](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/ReactionType.ts#L53)
