var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-Powered-By', 'm3ttulat0r');
    res.send('Hello World!');
});
var mettwoch = require('./mettwoch');
module.exports = app;

app.use(bodyParser.json());
var calcMett = require('./calcMett');








app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});