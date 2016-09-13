(function() {
	console.log(arguments.callee.i);
}).i = 12312;

//函数声明不能立即执行
// function foo(){}()

//加上括号后变成函数表达式
// (function foo(){
// 	console.log(123123)
// })()

//面试经典问题:

