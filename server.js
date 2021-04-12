const express = require('express');
const bodyparser = require('body-parser');
const mysql  = require('mysql');

const app     = express();
const port    = process.env.PORT || 3000;

const con = mysql.createConnection({
    host : '51.178.139.94',
    user : "nixo",
    password : "nixobdd1*",
    database : 'schoovid'
});


app.get('/', (req,res) => {


    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        res.send("Welcome to Schoovid API");
    });

});

app.post('/signup',(req,res) => {

});

app.post('/signin', (req,res) => {

});



app.listen(port,() => {
    console.log(`Server listening on port : ${port}`);
})