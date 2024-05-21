[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/interfaces/CreateStoryDTO](../README.md) / CreateStoryDTO

# Interface: CreateStoryDTO

CreateStoryDTO
This interface represents the data transfer object (DTO) for creating a story.

## Param

The GUID of the story.

## Param

The creation date of the story.

## Param

The information about the user who created the story.

## Param

The GUID of the user.

## Param

The information about the story content.

## Param

The title of the story.

## Param

The body text of the story.

## Param

The URL of the image associated with the story.

## Properties

### createdAt

> **createdAt**: `string`

#### Source

[app/entities/interfaces/CreateStoryDTO.ts:15](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/interfaces/CreateStoryDTO.ts#L15)

***

### storyGuid

> **storyGuid**: `string`

#### Source

[app/entities/interfaces/CreateStoryDTO.ts:14](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/interfaces/CreateStoryDTO.ts#L14)

***

### storyInfo

> **storyInfo**: `object`

#### bodyText

> **bodyText**: `string`

#### imgUrl

> **imgUrl**: `string`

#### title

> **title**: `string`

#### Source

[app/entities/interfaces/CreateStoryDTO.ts:19](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/interfaces/CreateStoryDTO.ts#L19)

***

### user

> **user**: `object`

#### userGuid

> **userGuid**: `string`

#### Source

[app/entities/interfaces/CreateStoryDTO.ts:16](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/interfaces/CreateStoryDTO.ts#L16)
