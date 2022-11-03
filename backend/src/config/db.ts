var mysql = require('mysql');
require("dotenv").config()
import { DataSource } from "typeorm"
import { User } from "../entity/userEntity";


const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT
const TYPE = process.env.TYPEORM


 const myDataSource = new DataSource({
    type: TYPE as any,
    host: DB_HOST,
    port: DB_PORT as any,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [User],
    logging: true,
    synchronize: true,
})
export default myDataSource

// const connection = mysql.createConnection({
//     type: 'mysql',
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'ArtFi',
//     synchronize: true
// });

// establish database connection
// myDataSource
//     .initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization:", err)
//     })


 
// connection.connect(function (err:any) {
//     if(err){
//         console.log("error occurred while connecting");
//     }
//     else{
//         console.log("connection created with Mysql successfully");
//     }
//  });