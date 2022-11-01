var mysql = require('mysql');

// export const AppDataSource = new DataSource({
//     type: 'mysql',
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'ArtFi',
//     synchronize: true
// })
const connection = mysql.createConnection({
    type: 'mysql',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ArtFi',
    synchronize: true
});

 
connection.connect(function (err:any) {
    if(err){
        console.log("error occurred while connecting");
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });