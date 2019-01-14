var level = require('level');
var through = require('through2');

var tr = function (db) {
    through({objectMode: true},function (data, enc, next) {
        this.push(data.key + '=' + data.value);
        next();
    }, function (done) {
        db.close(done);
    });
};

module.exports = function (databaseDir) {
    var db = level(databaseDir);
    return db.createReadStream().pipe(tr(db));
};
