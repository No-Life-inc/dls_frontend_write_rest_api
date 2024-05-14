import { DataSource } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

const connectDB = new DataSource({
    type: "mssql",
    host: process.env.DB_SERVER,
    port: parseInt(process.env.DB_USER || "1433"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.WRITE_DB,
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