import dotenv from "dotenv";

dotenv.config();

const MS_USER = process.env.MSUSER || " ";
const MS_PW = process.env.MSPW || " ";
const MS_URL = process.env.MSURL || " ";
const MS_DB = process.env.MSDB || " ";

export const db_config = {
  user: MS_USER,
  password: MS_PW,
  server: MS_URL, // You might need to replace this with your Docker container's IP
  database: MS_DB,
  options: {
    encrypt: false,
  },
};
