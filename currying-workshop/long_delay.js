'use strict';
var sum = 0;
var longDelay = function (a) {
    if (a) {
        sum += a;
        return longDelay;
    } else {
        let result = sum;
        sum = null;
        return result;
    }
};

module.exports = longDelay;
