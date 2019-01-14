const level = require('level');

module.exports = function (dir, callback) {
    var db = level(dir);

    var error;
    db.on('error', function (err) {
        error = err;
    });

    var result = [];
    function tryGet(i) {
        db.get('key' + i, function (err, value) {
            if (err) {
                if (!err.notFound) {
                    error = err;
                }
            } else {
                result.push(value);
            }
        });

        if (i < 100 && !error) {
            tryGet(i + 1);
        } else {
            db.close(function (err) {
                callback(error || err, result);
            });
        }
    };

    tryGet(0);
};
