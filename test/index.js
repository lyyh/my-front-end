// function* f() {
//   console.log('执行了！')
// }

// var generator = f();
// setTimeout(function () {
//   generator.next()
// }, 2000);
var n = 100;
console.time();
console.log(`${n}`)
console.timeEnd()
console.time();
console.log(''+n)
console.timeEnd()