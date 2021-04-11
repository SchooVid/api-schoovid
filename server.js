const express = require('express');
const mysql   = require('mysql');

const app     = express();
const port    = process.env.PORT || 3000;


app.get('/', (req,res) => {
    res.send("Welcome to Schoovid API!");
})

app.listen(port,() => {
    console.log(`Server listening on port : ${port}`);
})