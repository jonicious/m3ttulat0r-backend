var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mettwoch = require('./mettwoch');
var calcMett = require('./calcMett');
var mettmeister = require('./mettmeister');
var participate = require('./participate');

module.exports = app;

app.use(bodyParser.json());

/*
 * ROUTE: /get/mettday
 * Supported Endpoints
 * - GET
 * - OPTIONS
 */

app.route('/get/mettday')
    .get(mettwoch.daysToMettwoch)
    .options(mettwoch.optionsDaysToMettwoch);

/*
 * ROUTE: /calc/mett/:mettwochId, e.g. /calc/mett/1
 * Supported Endpoints
 * - GET
 * - OPTIONS
 */

app.route('/calc/mett/:mettwochId')
    .get(calcMett.calcMett)
    .options(calcMett.optionsCalcMett);

/*
 * ROUTE: /mettmeister/:mettwochId, e.g. /mettmeister/1
 * Supported Endpoints
 * - PUT
 * - GET
 * - DELETE
 * - OPTIONS
 */

app.route('/mettmeister/:mettwochId')
    .put(mettmeister.updateMettmeisterByMettwochId)
    .get(mettmeister.getMettmeisterByMettwochId)
    .delete(mettmeister.deleteMettmeisterByMettwochId)
    .options(mettmeister.optionsMettmeisterByMettwochId);

/*
 * ROUTE: /mettmeister/
 * Supported Endpoints
 * - POST
 * - GET
 * - OPTIONS
 */

app.route('/mettmeister')
    .post(mettmeister.postMettmeister)
    .get(mettmeister.getMettmeister)
    .options(mettmeister.optionsMettmeister);

/*
 * ROUTE: /participate/:mettwochId, e.g. /participate/1
 * Supported Endpoints
 * - POST
 * - GET
 * - OPTIONS
 */

app.route('/participate/:mettwochId')
    .post(participate.postParticipantByMettwochId)
    .get(participate.getParticipantByMettwochId)
    .options(participate.optionsParticipantByMettwochId);

/*
 * ROUTE: /participate/:mettwochId/:name, e.g. /participate/1/Jonas
 * Supported Endpoints
 * - DELETE
 * - OPTIONS
 */

app.route('/participate/:mettwochId/:name')
    .delete(participate.deleteParticipantByMettwochId)
    .options(participate.optionsParticipantByMettwochId);

/*
 * Healthcheck
 */

app.get("/healthcheck", function (req, res) {
    res.status(200).end();
});

/*
 * If no endpoint was found, return status code 404.
 */

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

/*
 * Configure the server.
 */

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});