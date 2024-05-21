[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [routes/stories](../README.md) / StoriesController

# Class: StoriesController

Controller for handling story-related endpoints.

## Constructors

### new StoriesController()

> **new StoriesController**(): [`StoriesController`](StoriesController.md)

#### Returns

[`StoriesController`](StoriesController.md)

## Methods

### createStory()

> **createStory**(`requestBody`, `req`): `Promise`\<[`StoryDTO`](../../../entities/DTOs/StoryDTO/classes/StoryDTO.md)\>

Endpoint to create a new story.

#### Parameters

• **requestBody**: [`CreateStoryDTO`](../../../entities/interfaces/CreateStoryDTO/interfaces/CreateStoryDTO.md)

The request body containing the story data.

• **req**: `any`

The request object.

#### Returns

`Promise`\<[`StoryDTO`](../../../entities/DTOs/StoryDTO/classes/StoryDTO.md)\>

A Promise resolving to the created story DTO.

#### Source

[app/routes/stories.ts:31](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/routes/stories.ts#L31)

***

### deleteStory()

> **deleteStory**(`storyGuid`): `Promise`\<`any`\>

Endpoint to delete a story by its GUID.

#### Parameters

• **storyGuid**: `string`

The GUID of the story to delete.

#### Returns

`Promise`\<`any`\>

A Promise resolving to the result of the deletion.

#### Source

[app/routes/stories.ts:76](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/routes/stories.ts#L76)

***

### updateStory()

> **updateStory**(`storyGuid`, `storyData`): `Promise`\<`any`\>

Endpoint to update a story by its GUID.

#### Parameters

• **storyGuid**: `string`

The GUID of the story to update.

• **storyData**

The data to update the story with.

• **storyData.storyInfo**: `Partial`\<[`StoryInfo`](../../../entities/entities/StoryInfo/classes/StoryInfo.md)\>

#### Returns

`Promise`\<`any`\>

A Promise resolving to the updated story DTO.

#### Source

[app/routes/stories.ts:99](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/routes/stories.ts#L99)
