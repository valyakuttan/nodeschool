
const http = require('http');
const bl = require('bl');

var count = 0;
var results = [];

function printResults() {
    results.forEach(function (d) {
        console.log(d);
    });
}

function httpGet(id) {
    http.get(process.argv[id + 2], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            results[id] = data.toString();
            count++;

            if (count > 2) {
                printResults();
            }

            return 0;
        }));
    });
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}
