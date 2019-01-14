var fs = require('fs');

var path = process.argv[2];
var buf = fs.readFileSync(path);
var str = buf.toString();
var xs = str.split('\n');

console.log(xs.length - 1);
