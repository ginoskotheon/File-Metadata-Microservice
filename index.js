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

app.post('/', multer({ dest: './uploads/'}).single('userFile'), function(req,res){
	console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
	console.log(req.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
    var ans = {
        size: req.file.size
    }
    res.send(ans);
	res.status(204).end();
});



var port = process.env.PORT || 8080;


app.listen(port, function(){
    console.log('Listening on port ' + port);
});