var fs = require('fs');
var path = require('path');

module.exports = function (folder, extension, callback) {
    fs.readdir(folder, function (error, list) {
        if (error) {
            return callback(error);
        }

        var filter = function (name) {
            return path.extname(name) === '.' + extension;
        };

        return callback(null, list.filter(filter));
    });
};
