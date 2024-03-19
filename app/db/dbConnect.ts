import sql from "mssql";
import { db_config } from "./db-config";

/**
 * Connect to the database
 * @returns 
 */
export const connectToDb = () => {
  return sql.connect(db_config);
};
