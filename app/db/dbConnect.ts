import sql from 'mssql';
import { config } from './db-config';

export const connectToDb = () => {
  return sql.connect(config);
};