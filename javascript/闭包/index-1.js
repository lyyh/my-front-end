//修改父闭包域中的变量可同时改变子闭包域中的变量
function creatClosure(args){
	var people = args;
	//全局变量
	update = function(upd_args){
		//浅拷贝
		for(var p in upd_args){
			people[p] = upd_args[p];
 		}
	}

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

//从外部修改函数内部的变量
update({
	name: 'lyh'
})
console.log(result)