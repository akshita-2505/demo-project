


const express=require('express');
const port = process.env.PORT || 8000;
const request = require('supertest');
var app = express();
app.get('/',(req,res) => 
       {
    res.status(404).send({
        error :'page not found'
    });
});

app.listen(port);
module.exports.app = app; 