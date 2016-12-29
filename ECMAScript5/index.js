/**
 * 
 * @authors liuyanhao (374659635@qq.com)
 * @date    2016-12-28 20:49:00
 * @version $Id$
 */
var Fun = function(){
	this.a = 1;
}
var Foo = function(){
	this.b = 2;
}
Foo.prototype = new Fun();
Foo.prototype.constructor = Foo;

var foo = new Foo();
console.log(hasPrototypeProperty(foo,'a'))

function hasPrototypeProperty(obj,name){
	return !obj.hasOwnProperty(name) && (name in obj);
}

console.log('' in obj)

