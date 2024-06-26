import sql from 'mssql';
/**
 * Get a specific user by their user_guid
 * @param pool Connection pool for database connections
 * @param user_guid Unique identifier
 * @returns Returns a user object
 */
export const getUserById = async (pool: any, user_guid: any) => {
    return await pool.request()
        .input('user_guid', sql.UniqueIdentifier, user_guid)
        .query('SELECT user_id, first_name, last_name, image_url as img_url, user_guid FROM users WHERE user_guid = @user_guid');
};

/**
 * Inserting a new story into the database.
 * @param pool Connection pool for database connections
 * @param story_guid Unique identifier
 * @param title Title of the story
 * @param body_text Story text
 * @param img_url Story image URL if available
 * @param created_at Creation time of story
 * @param user_id Unique identifier of the user who created the story
 * @returns Returns a story object
 */
export const insertStory = async (pool: any, story_guid: any, title: any, body_text: any, img_url: any, created_at: any, user_id: any) => {
    return await pool.request()
        .input('story_guid', sql.UniqueIdentifier, story_guid)
        .input('title', sql.NVarChar(255), title)
        .input('body_text', sql.NVarChar(sql.MAX), body_text)
        .input('img_url', sql.NVarChar(255), img_url)
        .input('created_at', sql.DateTime, created_at)
        .input('user_id', sql.Int, user_id)
        .query('INSERT INTO stories (story_guid, title, body_text, img_url, created_at, user_id) VALUES (@story_guid, @title, @body_text, @img_url, @created_at, @user_id)');
};