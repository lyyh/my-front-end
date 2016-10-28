// var f = function(){
// 	this.name = "f_name";
// 	this.say = function(){
// 		console.log('say');
// 	}
// 	return "213"
// }
// new f()
// var GLOBAL_OBJ = {
// 	name: '123',
// 	title: '312'
// }
// (function(param){
// 	var result = Object.assign({},param);
// 	console.log(result)
// 	return result
// })(GLOBAL_OBJ),
// (function(param){
// 	console.log(param)
// })(GLOBAL_OBJ)
function Person(){
	this.a = 1;
}
// var parents = new Person();
var parents = {};
parents.__proto__ = Person.prototype;
Person.call(parents);
console.log(parents)