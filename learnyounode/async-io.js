var fs = require('fs');

var path = process.argv[2];
fs.readFile(path, 'utf8', function (error, data) {
    if (error) return cosole.error(error);
    var xs = data.split('\n');

    return console.log(xs.length - 1);
});
