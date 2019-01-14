const through = require('through2');

var stream = through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
});
process.stdin.pipe(stream).pipe(process.stdout);
