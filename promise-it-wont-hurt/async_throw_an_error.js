'use strict';

function parsePromised(json) {
    var p = new Promise(function (fulfill, reject) {
        setTimeout(_ => {
            try {
                fulfill(JSON.parse(json));
            } catch (e) {
                reject(e);
            }
        }, 300);
    });
    return p;
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2])
    .then(null, onReject);
