import express from 'express';
var mysql = require('mysql');
import loginRoutes from "./routes/loginRoute";

import * as dotenv from 'dotenv'
dotenv.config()

const app = express();

import myDataSource from './config/db';
const port = process.env.PORT;
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.use(express.json());

app.use('/',loginRoutes);

app.listen(port , () => {
    console.log(`server started on ${port}`)
})

// run typescript
//  ts-node main.ts
//  tsc main.ts