// //类式继承
// var Father = function(){
// 	this.age = 52;
// 	this.say = function(){
// 		console.log('hello my name is',this.name)
// 		console.log(this.gAge)
// 	}
// 	GrandFather.call(this);
// }
// var GrandFather = function(){
// 	this.gAge = 100;
// 	this.sayGAge = function(){
// 		console.log('grandfater age is',this.gAge);
// 	}
// }
// var Child = function(){
// 	this.name = 'lyh';
// 	Father.call(this);
// }
// var child = new Child();
// child.say()
// child.sayGAge()

// //原型继承
// var Father = function(){
// 	this.fatherName = 'flyh';
// 	this.sayFatherName = function(){
// 		console.log('father name is',this.fatherName);
// 	}
// }
// Father.prototype.say = function(){
// 	console.log('hello my name is',this.name);
// }
// var Child = function(name){
// 	this.name = 'lyh'
// }
// Child.prototype = new Father();
// var man = new Child();
// man.say();
// man.sayFatherName()

//组合继承
var Father = function(){
	this.age = 123; 
}
Father.prototype.getAge = function(){
	return this.age;
}
var Child = function(){
	Father.call(this);
}
Child.prototype = new Father();
var child = new Child();
console.log(child.getAge());

