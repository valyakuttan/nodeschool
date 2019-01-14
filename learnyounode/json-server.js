const http = require('http');
const url = require('url');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime (time) {
    return { unixtime: time.getTime() };
}


const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        return res.end('send me a GET\n');
    }



    const parsedUrl = url.parse(req.url, true);
    const time = new Date(parsedUrl.query.iso);
    var result = null;

    if (parsedUrl.pathname === '/api/parsetime') {
        result = parsetime(time);
    } else if (parsedUrl.pathname === '/api/unixtime') {
        result = unixtime(time);
    }

    if (result) {
        res.writeHead(200,
                      { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        return res.end();
  }
}).on('error', console.error);

server.listen(Number(process.argv[2]));
