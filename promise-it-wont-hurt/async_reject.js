'use strict';

var promise = new Promise((_, reject) => {
    setTimeout(_ => {
        reject(new Error('REJECTED!'));
    }, 300);
});

(async _ => {
    try {
        await promise;
    } catch(e) {
        console.log(e.message);
    }
})();

