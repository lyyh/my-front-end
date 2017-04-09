var n = 4;
var corrects = [10, 20, 30, 40];
var sum = 0;

var count = Math.ceil(n * 3 / 5)

var fac = function(num) {
    if (num == 1) {
        return num;
    }
    return num * fac(num - 1);
}


var $n = fac(n);

for (var i = count; i <= n; i++) {
    if (i == n) {
        sum += 1;
    } else {
        var divisor = fac(n - i) * fac(i);
        sum += $n / divisor;
    }
}

var reduces = corrects.reduce(function(value, item, index) {
    if (index == 1) {
        return (value / 100) * (item / 100)
    } else {
        return value * (item / 100)
    }
})

var ret = new Number(sum*reduces);
console.log(ret.toFixed(5));
// console.log((ret1 * ret).toFixed)
