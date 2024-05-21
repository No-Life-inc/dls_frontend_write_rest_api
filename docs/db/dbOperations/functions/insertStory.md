[**dls_frontend_write_rest_api v1.0.0**](../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../modules.md) / [db/dbOperations](../README.md) / insertStory

# Function: insertStory()

> **insertStory**(`pool`, `story_guid`, `title`, `body_text`, `img_url`, `created_at`, `user_id`): `Promise`\<`any`\>

Inserts a new story into the database.

## Parameters

• **pool**: `any`

The connection pool for database connections.

• **story\_guid**: `any`

The unique identifier of the story.

• **title**: `any`

The title of the story.

• **body\_text**: `any`

The text of the story.

• **img\_url**: `any`

The URL of the story image (if available).

• **created\_at**: `any`

The creation time of the story.

• **user\_id**: `any`

The unique identifier of the user who created the story.

## Returns

`Promise`\<`any`\>

A promise that resolves to a story object.

## Source

[app/db/dbOperations.ts:27](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/db/dbOperations.ts#L27)
