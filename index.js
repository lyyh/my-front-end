Function.prototype.testBind = function(that) {
    var _this = this,
        slice = Array.prototype.slice,
        args = slice.apply(arguments, [1]);
    return function() {
        return _this.apply(that,
            args.concat(args, Array.prototype.slice.call(arguments)));
    }
}

function A(param1,param2){
	consol
	this.a = 1;
	this.b = 2;
}
var a1 = A.bind({a:3,b:4});
console.log(a1())