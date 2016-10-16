function *gen(){
	var a = yield 100*200;
	return a;
}
var g = gen();
console.log(g.next(123))
console.log(g.next())
function a(){
    console.log(123)
}