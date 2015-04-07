var mysql = require("mysql");

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'm3ttulat0r',
    debug: false
});

exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        if(err) {
            return callback(err);
        }
        callback(err, connection);
    });
};