const level = require('level');

module.exports = function (dir, obj, callback) {
    var db = level(dir);
    var error;

    for (var key in obj) {
        db.put(key, obj[key]);
    }

    db.on('error', function (err) {
        error = err;
    });

    db.close(function (err) {
        callback(error || err);
    });
};
