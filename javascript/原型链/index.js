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


//使用object.create创建对象，达到继承效果
var o = {
  a: 2,
  m: function(){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// 当调用 o.m 时,'this'指向了o.

var p = Object.create(o);
// p是一个对象, p.[[Prototype]]是o.

p.a = 12; // 创建 p 的自身属性a.
console.log(p.m()); // 13
console.log(p.__proto__)
console.log(p.hasOwnProperty('a'))

