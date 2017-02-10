let work1 = function(){
	console.log(123)
}

let work2 = function(){
	console.log(213)
}

let work3  = function(){
	console.log(4213)
}

let tasks = [work1,work2,work3];
function* doTask(){
	for(let task of tasks){
		yield task();
	}
}

let gen = doTask();
gen.next();
gen.next();
gen.next();