/**
 * Created by Jonah on 4/1/2015.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('X-Powered-By', 'm3ttulat0r');
    res.send('Hello World!');
});

app.get('/get/mettday', function (req, res) {
    var dayOfWeek = new Date().getDay();
    var output;

    switch (dayOfWeek) {
        case 0: output = 3; break;
        case 1: output = 2; break;
        case 2: output = 1; break;
        case 3: output = 0; break;
        case 4: output = 6; break;
        case 5: output = 5; break;
        case 6: output = 4; break;
        default: output = null; break;
    }

    var daysToMettwochJson = { };
    daysToMettwochJson.days = output;

    var outputJson = JSON.stringify(daysToMettwochJson);

    res.send(outputJson);
});

app.get('/calc/mett', function (req, res) {

    var halvesCount = 8; // Amount of Halves
    var mettAmount = 120; // Amount of Mett per Half

    var mettJson = { };

    mettJson.mett = { };
    mettJson.mett.singleAmount = mettAmount;
    mettJson.mett.totalAmount = halvesCount * mettAmount;
    mettJson.mett.unit = 'g';

    mettJson.halves = { };
    mettJson.halves.count = halvesCount;

    var outputJson = JSON.stringify(mettJson);

    res.send(outputJson);
});

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});