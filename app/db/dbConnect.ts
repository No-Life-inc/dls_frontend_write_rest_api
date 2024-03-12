import sql from "mssql";
import { db_config } from "./db-config";

export const connectToDb = () => {
  return sql.connect(db_config);
};
