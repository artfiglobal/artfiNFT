import express from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import loginRoutes from "./routes/loginRoute";
const app = express();

const databaseURL = process.env.mySQLURL
const port = process.env.PORT;

app.use('/login',loginRoutes);

app.listen(port , () => {
    console.log(`server started on ${port}`)
})

// run typescript
//  ts-node main.ts
//  tsc main.ts