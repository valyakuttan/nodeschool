var xs = process.argv;
var n = xs.length;
var sum = 0;

for (var i = 2; i < n; i++) {
    sum += Number(xs[i]);
}

console.log(sum);

