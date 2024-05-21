[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/DTOs/createStoryDTO](../README.md) / CreateStoryDTO

# Class: CreateStoryDTO

Data Transfer Object (DTO) for creating a story.

This DTO is used when creating a new story.

## Remarks

This DTO includes the story GUID, creation date, user who created the story,
and information about the story such as title, body text, and image URL.

## Param

The GUID of the story.

## Param

The date the story was created.

## Param

The user who created the story.

## Param

Information about the story.

## Constructors

### new CreateStoryDTO()

> **new CreateStoryDTO**(): [`CreateStoryDTO`](CreateStoryDTO.md)

#### Returns

[`CreateStoryDTO`](CreateStoryDTO.md)

## Properties

### createdAt

> **createdAt**: `Date`

The date the story was created.

#### Source

[app/entities/DTOs/createStoryDTO.ts:33](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/createStoryDTO.ts#L33)

***

### storyGuid

> **storyGuid**: `string`

The GUID of the story.

#### Source

[app/entities/DTOs/createStoryDTO.ts:26](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/createStoryDTO.ts#L26)

***

### storyInfo

> **storyInfo**: `CreateStoryDTOStoryInfo`

Information about the story.

#### Nested

#### Source

[app/entities/DTOs/createStoryDTO.ts:51](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/createStoryDTO.ts#L51)

***

### user

> **user**: `CreateStoryDTOUser`

The user who created the story.

#### Nested

#### Source

[app/entities/DTOs/createStoryDTO.ts:42](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/DTOs/createStoryDTO.ts#L42)
