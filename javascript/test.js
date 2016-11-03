var obj = {
	a: 1,
	b: 2
}
var array = [0,2,3,4]
// console.log(obj[1])
for(var item of array){
	console.log(item)
}
var arr = Array('123','123');
console.log(arr)

function foo(){
	var array = Array.prototype.slice.call(arguments)
	console.log(array)
}
foo(1,2,3)

var str = 'hello world';
console.log(str.substring(3,0))