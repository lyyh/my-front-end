//Number Boolean String 类型重写了toString()方法
var num = 123;
console.log(num.toString())
console.log(Object.prototype.toString.call(num))
//
var array = new Array(1,2,3);
console.log(array.toString())
var date = new Date();
console.log(date.toString())