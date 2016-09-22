var array = [1,2,3,4];
var res = Array.prototype.slice.call(array)
console.log(res);
console.log(array == res); //不同的引用

var obj = {
  name: 'curring'
}
/**
 * bind es5语法
 * 改变function执行时的上下文，本质上是延迟执行
 * @return {[type]} [description]
 */
var fun = function(){
  console.log(this.name);
}.bind(obj);
fun()
