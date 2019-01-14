const net = require('net');


var server = net.createServer(function (socket) {
    socket.end(now() + '\n');
}).on('error', console.error);

server.listen(Number(process.argv[2]));

function now() {
    var d = new Date();

    var data = zeroFill(d.getFullYear());
    data += '-' + zeroFill(d.getMonth() + 1);
    data += '-' + zeroFill(d.getDate());
    data += ' ' + zeroFill(d.getHours());
    data += ':' + zeroFill(d.getMinutes());

    return data;
}

function zeroFill(n) {
    return (n < 10 ? '0' : '') + n;
}
