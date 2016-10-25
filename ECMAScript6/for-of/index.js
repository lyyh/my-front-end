// for(let s of 'string'){
// 	console.log(s)
// }
// let setCollection = new Set([1,2,3,3]);  //不会报错，但是遍历的时候不会重复
// for(let setItem of setCollection){
// 	console.log(setItem)
// }


// let mapCollection = new Map([
// 		["name",'zhangsan'],
// 		['title','author']
// 	])
// //使用解构的方式来解压键和值来使得它们成为两个独立的变量
// for(let [key,value] of mapCollection){
// 	console.log("key:" + key);
// 	console.log("value:"+ value);
// }

// var obj = {
// 	name: 'lisi',
// 	'author': 'zhangsan'
// }
// for(var s of Object.keys(obj)){
// 	console.log(s)
// }
var array = [123,123,123,321,123];
for(var i in array){
	if(array[i] === 123){
		console.log(i)
	}else{
		break;
	}
}