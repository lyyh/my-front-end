var Foo = function(args){
	this.getA = function(){
		this.a = 1;
		return this.a;
	}.bind(args)
}
var obj = {}
var foo = new Foo(obj);
console.log(foo.getA())
console.log(obj.a)