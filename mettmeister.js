var mysqlLib = require("./mysqlLib");

exports.updateMettmeisterByMettwochId = function (req, res) {

    var mettmeister = req.body.mettmeister;
    var mettwochId = req.params.mettwochId;
    var mettwochExists = false;

    var selectQuery = 'SELECT mettwoch_id FROM mettwoch WHERE mettwoch_id = ?'; //mettwochId
    var updateQuery = 'UPDATE mettwoch SET mettmeister = ? WHERE mettwoch_id = ?'; //mettmeister, mettwochId

    mysqlLib.getConnection(function (err, connection) {

        connection.query(selectQuery, [mettwochId], function (err, rows) {
            mettwochExists = !!rows.length;
        });

        connection.query(updateQuery, [mettmeister, mettwochId], function (err) {
            if (!err) {
                if (!mettwochExists) {
                    res.status(400)
                        .json({
                            message: "The mettwoch does not exist."
                        })
                        .end();
                }
                res.status(201).end();
            } else {
                res.status(500).end();
            }
        });

    });

};

exports.postMettmeister = function (req, res) {

    var mettmeister = req.body.mettmeister;

    var insertQuery = 'INSERT INTO mettwoch(mettmeister) VALUES(?)'; //mettmeister

    mysqlLib.getConnection(function(err, connection) {

        connection.query(insertQuery, [mettmeister], function (err) {
            if (!err) {
                res.status(200).end();
            } else {
                res.status(500).end();
            }
        });
    });
};

exports.getMettmeister = function(req, res) {

    var query = 'SELECT mettmeister FROM mettwoch ORDER BY mettmeister DESC LIMIT 1';

    mysqlLib.getConnection(function(err, connection) {

        connection.query(query, function (err, rows) {
            if (!err) {
                var mettmeister = rows[0];
                res.json(mettmeister);
            } else {
                res.status(500).end();
            }
        })
    });
};

exports.optionsMettmeister = function(req, res) {

    var mettmeisterOptions = {
        POST: {
            description: "Create new mettmeister",
            mettmeister: {
                type: "string",
                description: "Mettmeister for a new mettwoch"
            },
            exampleUrl: "http://localhost:8080/mettmeister",
            exampleBody: {
                mettmeister: "Jonas"
            }
        },
        GET: {
            description: "Gets the latest mettmeister",
            exampleUrl: "http://localhost:8080/mettmeister"
        }
    };

    res.json(mettmeisterOptions);
};

exports.getMettmeisterByMettwochId = function(req, res) {

    var mettwochId = req.params.mettwochId;

    var query = 'SELECT mettmeister FROM mettwoch WHERE mettwoch_id = ? ORDER BY mettmeister DESC LIMIT 1'; //mettwochId

    mysqlLib.getConnection(function(err, connection) {

        connection.query(query, [mettwochId], function (err, rows) {
            if (!err) {
                var mettmeister = rows[0];
                res.json(mettmeister);
            } else {
                res.status(500).end();
            }
        });
    });
};

exports.deleteMettmeisterByMettwochId = function(req, res) {
    var mettwochExists = false;
    var mettwochId = req.params.mettwochId;

    var selectQuery = 'SELECT mettmeister FROM mettwoch WHERE mettwoch_id = ?'; //mettwochId
    var deleteQuery = 'DELETE FROM mettwoch WHERE mettwoch_id = ?'; //mettwochId

    mysqlLib.getConnection(function(err, connection) {

        connection.query(selectQuery, [mettwochId], function (err, rows) {
            mettwochExists = !!rows.length;
        });

        connection.query(deleteQuery, [mettwochId], function (err, rows) {
            if (!err) {
                if (!mettwochExists) {
                    res.status(400)
                        .json({
                            message: "Mettwoch does not exist"
                        })
                        .end();
                }
                res.status(200).end();
            } else {
                res.status(500).end();
            }
        });
    })
};

exports.optionsMettmeisterByMettwochId = function(req, res) {

    var optionsMettmeisterByMettwochId = {
        GET: {
            description: "Get mettmeister by mettwochId",
            mettmeister: {
                type: "string",
                description: "Name of Mettmeister"
            },
            exampleUrl: "http://localhost:8080/mettmeister/11",
            exampleRequestBody: null,
            exampleResponseBody: {
                "mettmeister": "Jonas"
            },
            statuscode: {
                successful: 200,
                error: 500
            }
        },

        DELETE: {
            description: "Delete mettmeister by mettwochId",
            exampleUrl: "http://localhost:8080/mettmeister/11",
            exampleRequestBody: null,
            exampleResponseBody: null,
            statusCode: {
                successful: 200,
                mettwochDoesNotExists: 400,
                error: 500
            }
        }
    };

    res.send(optionsMettmeisterByMettwochId);

};