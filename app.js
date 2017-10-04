//Add required modules here
var express = require('express');
var request = require('request');
var app = express();
var path = require('path');
var fs = require('fs');

//http://localhost:3000/analyze/hello!
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.use('/style', express.static(path.join(__dirname, 'views/style')));


app.get('/', function (req, res) {
    res.send('Hello World');
});


app.listen(8082, function() {
       console.log('Deezer api is now running on port 8082 and in NodePort 30082')
});
