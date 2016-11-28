// function a(){

// }
// var array = new Array()
// console.log(array instanceof Array)
// var num = 123;
// console.log(num.constructor == Number)
// console.log(false.constructor == Boolean)

// var date = new Date();
// console.log(date instanceof Function)

// console.log(Object.prototype.toString.call([]))


var array = new Array(1,2,3);
console.log(Object.prototype.valueOf.call(array));
// var num = 123;
// console.log(Number.prototype.valueOf.call(num))

// console.log(Object.prototype.toString.call(undefined))