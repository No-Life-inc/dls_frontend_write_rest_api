import sql from 'mssql';
/**
 * Retrieves a specific user by their user_guid from the database.
 * 
 * @param {sql.ConnectionPool} pool - The connection pool for database connections.
 * @param {string} user_guid - The unique identifier of the user.
 * @returns {Promise<any>} A promise that resolves to a user object.
 */
export const getUserById = async (pool: any, user_guid: any) => {
    return await pool.request()
        .input('user_guid', sql.UniqueIdentifier, user_guid)
        .query('SELECT user_id, first_name, last_name, image_url as img_url, user_guid FROM users WHERE user_guid = @user_guid');
};

/**
 * Inserts a new story into the database.
 * 
 * @param {sql.ConnectionPool} pool - The connection pool for database connections.
 * @param {string} story_guid - The unique identifier of the story.
 * @param {string} title - The title of the story.
 * @param {string} body_text - The text of the story.
 * @param {string} img_url - The URL of the story image (if available).
 * @param {Date} created_at - The creation time of the story.
 * @param {number} user_id - The unique identifier of the user who created the story.
 * @returns {Promise<any>} A promise that resolves to a story object.
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