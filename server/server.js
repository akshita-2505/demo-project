const express=require('express');
const request = require('supertest');
var app = express();
app.get('/',(req,res) => 
       {
    res.status(404).send({
        error :'page not found'
    });
});

app.listen(8000);
module.exports.app = app; 