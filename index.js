function A(a,b){
	console.log(a)
	console.log(b)
	console.log(this)
}.bind({a:1})
A()

