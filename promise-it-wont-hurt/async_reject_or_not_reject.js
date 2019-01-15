'use strict';

var promise = (fulfill, reject) => {
    var p =  new Promise((fulfill, reject) => {
        setTimeout(_ => {
            fulfill('I FIRED');
        }, 300);
        setTimeout(_ => {
            reject(new Error('REJECTED!'));
        }, 300);
    });
    p.then(fulfill, reject);
    return p;
};

(async _ => {
    try {
        await promise(console.log, e => console.log(e.message));
    } catch (e) {}
})();
