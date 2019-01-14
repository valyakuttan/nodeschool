const http = require('http');
const fs = require('fs');

const stream = fs.createReadStream(process.argv[3])
      .on('error',console.error);

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    stream.pipe(response);
}).on('error', console.error);

server.listen(Number(process.argv[2]));
