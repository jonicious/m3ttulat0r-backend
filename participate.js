var mysqlLib = require("./mysqlLib");

exports.postParticipantByMettwochId = function(req, res) {
    var username = req.body.username;
    var halves = req.body.halves;
    var mettwochId = req.params.mettwochId;

    var query = 'INSERT INTO participants(mettwoch_id, name, halves) VALUES(?, ?, ?)'; // mettwochId, username, halves

    mysqlLib.getConnection(function(err, connection) {

        connection.query(query, [mettwochId, username, halves], function (err) {
            if (!err) {
                res.status(201).end();
            } else {
                res.status(500).end();
            }
        });
    });
};

exports.getParticipantByMettwochId = function(req, res) {
    var mettwochId = req.params.mettwochId;

    var query = 'SELECT name FROM participants WHERE mettwoch_id = ?'; //mettwochId

    mysqlLib.getConnection(function(err, connection) {

        connection.query(query, [mettwochId], function (err, rows) {
            if (!err && rows.length) {
                res.send(rows);
            } else if (!rows.length) {
                res.status(204).end();
            } else {
                res.status(500).end();
            }
        });
    });
};

exports.deleteParticipantByMettwochId = function(req, res) {
    var mettwochId = req.params.mettwochId;
    var name = req.params.name;

    var deleteQuery = 'DELETE FROM participants WHERE mettwoch_id = ? AND name = ?'; //mettwochId, name

    // TODO: Vorher prüfen ob Datenbankeintrag exisitert weil sonst immer 200.

    mysqlLib.getConnection(function(err, connection) {

        connection.query(deleteQuery, [mettwochId, name], function (err) {
            var status = !err ? 200 : 500;
            res.status(status).end();
        });
    });
};

exports.optionsParticipantByMettwochId = function(req, res) {

    var participantByMettwochIdOptions = {

    };

    res.send(participantByMettwochIdOptions);

};