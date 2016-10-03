'use strict';

var http = require('http');
var express = require("express");
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

var port = process.env.PORT || 8080;


app.listen(port, function(){
    console.log('Listening on port ' + port);
});