//匿名函数表示闭包
function creatClosure(args){
	var people = args;
	return function(){ //匿名函数(闭包)
		return people;
	}
}

var cc = creatClosure({
	name: 'lyyh',
	age: 20
});

var result = cc();
console.log(result)
//result: { name: 'lyyh', age: 20 }