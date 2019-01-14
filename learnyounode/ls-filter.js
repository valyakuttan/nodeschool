
var filter_ls = require('./mod-ls.js');

var folder = process.argv[2];
var extension = process.argv[3];

filter_ls(folder, extension, function (err, list) {
    if (err) {
        return console.error(err);
    }

    list.forEach(function (f) {
        console.log(f);
    });

    return 0;
});
