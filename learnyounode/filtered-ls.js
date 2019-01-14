var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function (error, list) {
    if (error) {
        return cosole.error(error);
    }

    var xs = list.filter(function (name) {
        return path.extname(name) == ext;
    });

    for (var i = 0; i < xs.length; i++) {
        console.log(xs[i]);
    }

});
