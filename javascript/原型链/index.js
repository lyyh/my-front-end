var f1 = function() {} 

//全是函数对象
console.log(typeof f1)
console.log(typeof Array)
console.log(typeof Object)
console.log(typeof String)
console.log(typeof Date)
console.log(typeof Function)

function Person() {}
function GrandPerson(argument) {}
function Fn(){}
Person.prototype = {
	a:1
};
var person = new Person();
Person.prototype.a =2

