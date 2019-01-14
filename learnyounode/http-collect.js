
const http = require('http');
const bl = require('bl');

var url = process.argv[2];

http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }

        xs = data.toString();
        console.log(xs.length);
        console.log(xs);

        return 0;
    }));
}).on('error', console.error);
