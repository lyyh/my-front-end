var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};

for(var i in obj){
	if(obj.hasOwnProperty(i)){
		console.log(i)
	}
}