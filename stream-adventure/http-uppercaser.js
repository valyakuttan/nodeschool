const http = require('http');
const through = require('through2');

var upper = through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
});

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.end('send me a POST\n');
        return;
    }

    req.pipe(upper).pipe(res);
}).on('error', console.error);

server.listen(Number(process.argv[2]));
