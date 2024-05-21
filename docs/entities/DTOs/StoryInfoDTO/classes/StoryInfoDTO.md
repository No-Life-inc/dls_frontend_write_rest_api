[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/StoryInfoDTO](../README.md) / StoryInfoDTO

# Class: StoryInfoDTO

Data Transfer Object (DTO) for StoryInfo entity.

This DTO is used to transfer data related to a StoryInfo entity.

## Remarks

This DTO contains information about a story, including its title, body text,
image URL, creation date, and ID.

## Constructors

### new StoryInfoDTO()

> **new StoryInfoDTO**(`storyInfo`): [`StoryInfoDTO`](StoryInfoDTO.md)

Constructor for StoryInfoDTO.

#### Parameters

• **storyInfo**: [`StoryInfo`](../../../entities/StoryInfo/classes/StoryInfo.md)

The StoryInfo entity to create DTO from.

#### Returns

[`StoryInfoDTO`](StoryInfoDTO.md)

#### Source

[app/entities/DTOs/StoryInfoDTO.ts:61](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryInfoDTO.ts#L61)

## Properties

### bodyText

> **bodyText**: `string`

The body text of the story.

#### Optional

#### Source

[app/entities/DTOs/StoryInfoDTO.ts:30](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryInfoDTO.ts#L30)

***

### createdAt

> **createdAt**: `Date`

The creation date of the story.

#### Optional

#### Source

[app/entities/DTOs/StoryInfoDTO.ts:48](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryInfoDTO.ts#L48)

***

### imgUrl

> **imgUrl**: `string`

The URL of the image associated with the story.

#### Optional

#### Source

[app/entities/DTOs/StoryInfoDTO.ts:39](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryInfoDTO.ts#L39)

***

### storyId

> **storyId**: `number`

The ID of the story.

#### Source

[app/entities/DTOs/StoryInfoDTO.ts:55](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryInfoDTO.ts#L55)

***

### title

> **title**: `string`

The title of the story.

#### Optional

#### Source

[app/entities/DTOs/StoryInfoDTO.ts:21](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/StoryInfoDTO.ts#L21)
