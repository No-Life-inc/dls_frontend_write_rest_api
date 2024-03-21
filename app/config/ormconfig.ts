import { DataSource } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

const connectDB = new DataSource({
    type: "mssql",
    host: process.env.MSSERVER,
    port: parseInt(process.env.DB_PORT || "3000"),
    username: process.env.MSUSER,
    password: process.env.MSPW,
    database: process.env.MSDB
});

connectDB.initialize().then(()=>{
    console.log(`Data Source has been initialized`);
})
.catch((err)=>{
console.error(`Data Source initialization error`, err)
})

export default connectDB;