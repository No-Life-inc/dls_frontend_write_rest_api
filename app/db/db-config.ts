import dotenv from "dotenv";

dotenv.config();

/**
 * Represents database configuration.
 * 
 * This module retrieves database configuration details from environment variables.
 * 
 * @remarks
 * The following environment variables are used:
 * - DB_USER: The username for database authentication.
 * - DB_PASSWORD: The password for database authentication.
 * - DB_SERVER: The URL or IP address of the database server.
 * - DB_FRONTEND: The name of the frontend database.
 */
const MS_USER = process.env.DB_USER || " ";
const MS_PW = process.env.DB_PASSWORD || " ";
const MS_URL = process.env.DB_SERVER || " ";
const MS_DB = process.env.DB_FRONTEND || " ";

/**
 * Represents RabbitMQ configuration.
 * 
 * This module exports a configuration object for connecting to RabbitMQ.
 */
export const db_config = {
  user: MS_USER,
  password: MS_PW,
  server: MS_URL,
  database: MS_DB,
  options: {
    encrypt: false,
  },
};
