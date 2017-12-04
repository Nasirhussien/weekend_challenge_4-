var express = require('express');
var app = express();
app.use(express.static('server/public'));

var port = process.env.PORT || 5000;
