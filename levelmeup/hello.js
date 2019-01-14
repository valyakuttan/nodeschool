module.exports = function (X, Y, callback) {
    result = 'ALL YOUR {' + X + '} ARE BELONG TO {' + Y + '}';
    callback(null, result);
};
