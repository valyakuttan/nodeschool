'use strict';

var p = new Promise((fulfill, _) => {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
});

(async _ => {
    let mesg = await p;
    console.log(mesg);
})();
