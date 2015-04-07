var mysqlLib = require("./mysqlLib");

exports.calcMett = function (req, res) {

    var halvesCount = 0;
    var mettAmount = 37.5;
    var mettwochId = req.params.mettwochId;

    var query = 'SELECT SUM(halves) AS halvesCount from participants WHERE mettwoch_id = ?'; // mettwochId

    mysqlLib.getConnection(function(err, connection) {

        if (err) {
            res.status(500).end();
        }

        connection.query(query, [mettwochId], function (err, rows) {
            if (!err) {
                halvesCount = rows[0].halvesCount;
                if (halvesCount != null) {
                    var calculatedMettJson = {
                        mett: {
                            singleAmount: mettAmount,
                            totalAmount: halvesCount * mettAmount,
                            unit: "g"
                        },
                        halves: {
                            count: halvesCount
                        }
                    };
                    res.send(calculatedMettJson);
                }
                else {
                    res.status(400).end();
                }
            } else {
                res.status(500).end();
            }
        });
    });
};

exports.optionsCalcMett = function(req, res) {

    var calcMettOptions = {

    };

    res.send(calcMettOptions);

};