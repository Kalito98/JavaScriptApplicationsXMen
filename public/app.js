// To start the server you need three commands:
//     $ npm install 
//     $ node app.js
//     $ http-server .


var express = require('express');
var path = require('path');
var app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen((process.env.PORT || 3000), function () {
  console.log('Server running on 3000...');
});

// app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000!');