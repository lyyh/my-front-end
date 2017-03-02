var a = {};
var b = { key: 'b' };
var c = { key: 'c' };
a[b] = 123;
console.log(a)
a[c] = 456;
console.log(a[b])
