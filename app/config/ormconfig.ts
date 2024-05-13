import { DataSource } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

/**
 * Represents a data source configuration for connecting to a Microsoft SQL Server database.
 * 
 * The DataSource object is configured with connection details retrieved from environment variables.
 * 
 * @remarks
 * The following environment variables are used:
 * - MSSERVER: The host of the database server.
 * - DB_PORT: The port number of the database server. If not provided, defaults to 1433.
 * - MSUSER: The username for authentication.
 * - MSPW: The password for authentication.
 * - MSDB: The name of the database to connect to.
 */

const connectDB = new DataSource({
    type: "mssql",
    host: process.env.MSSERVER,
    port: parseInt(process.env.DB_PORT || "1433"),
    username: process.env.MSUSER,
    password: process.env.MSPW,
    database: process.env.MSDB,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
});

connectDB.initialize().then(()=>{
    console.log(`Data Source has been initialized`);
})
.catch((err)=>{
console.error(`Data Source initialization error`, err)
})

export default connectDB;