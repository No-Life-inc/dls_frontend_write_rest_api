import dotenv from "dotenv";

dotenv.config();

/**
 *  Database configuration
 */
const MS_USER = process.env.DB_USER || " ";
const MS_PW = process.env.DB_PASSWORD || " ";
const MS_URL = process.env.DB_SERVER || " ";
const MS_DB = process.env.DB_FRONTEND || " ";

/**
 *  RabbitMQ configuration
 */
export const db_config = {
  user: MS_USER,
  password: MS_PW,
  server: MS_URL, // You might need to replace this with your Docker container's IP
  database: MS_DB,
  options: {
    encrypt: false,
  },
};
