var array = [1,2,3,4];
var res = Array.prototype.slice.call(array)
console.log(res);
console.log(array == res); //不同的引用

var obj = {
  name: 'curring'
}
var fun = function(){
  console.log(this.name);
}.bind(obj);
fun()
