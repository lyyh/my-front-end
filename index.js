var A = function(){
	this.a = 1;
	this.b = 2;
}
A.prototype.c = 1;

var a = new A();
console.log(a)

var a1 = JSON.parse(JSON.stringify(a));
console.log(a1)