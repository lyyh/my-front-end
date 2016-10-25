for(let s of 'string'){
	console.log(s)
}
let setCollection = new Set([1,2,3,3]);  //不会报错，但是遍历的时候不会重复
for(let setItem of setCollection){
	console.log(setItem)
}
