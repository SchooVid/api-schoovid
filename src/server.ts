import { config } from "dotenv";
import { createConnection } from "typeorm";
import { router } from "./index.route";

config();
const express       = require('express');
const bodyparser    = require('body-parser');
const mysql         = require('mysql');
console.log("prout");

const port    = process.env.PORT || 3000;

createConnection({
    type : "mysql",
    logging : true,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/**/models/*.ts"],
    synchronize : true
}).then(() => {
    const app     = express();
    
    app.use(bodyparser.json());
    app.use('/',router);

    app.listen(port,() => {
        console.log(`Server listening on port : ${port}`);
    })
},() => {});


