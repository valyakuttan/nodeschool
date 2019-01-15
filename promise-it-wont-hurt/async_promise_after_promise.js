'use strict';

(async _ => {
    let v1 = await first();
    let v2 = await second(v1);
    console.log(v2);
})();
