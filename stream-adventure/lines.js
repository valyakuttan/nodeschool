const split = require('split');
const through = require('through2');

var count = 0;
var tr = through(function (buf, _ , next) {
    var line = buf.toString();
    this.push(count % 2 === 0
              ? line.toLowerCase() + '\n'
              : line.toUpperCase() + '\n'
             );
    count++;
    next();
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);
