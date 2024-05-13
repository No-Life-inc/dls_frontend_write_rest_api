import sql from "mssql";
import { db_config } from "./db-config";

/**
 * Establishes a connection to the database using the provided configuration.
 * 
 * @returns {Promise<sql.ConnectionPool>} A promise that resolves to a SQL Connection Pool object representing the database connection.
 * 
 * @remarks
 * This function utilizes the 'mssql' library to establish a connection to the database.
 * The database configuration is retrieved from the 'db_config' object exported from 'db-config.ts'.
 */
export const connectToDb = () => {
  return sql.connect(db_config);
};
