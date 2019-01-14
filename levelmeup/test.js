var level = require('level');

module.exports = function (dir, date, callback) {
    var db = level(dir);
    var error;

    db.createReadStream({
        start: 'rvagg!',
        end: 'rvagg!~'
    })
        .on('data', function (data) {
            console.log(data);
        })
        .on('error', function (err) {
            error = err;
        })
        .on('end', function () {
            db.close(function (err) {
                console.log('finished\n');
            });
        });
};
