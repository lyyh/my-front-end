// let promise = new Promise((resolve,reject) => {
// 	throw new Error('test');
// })
// promise.catch(error => {
// 	console.log(error)
// })
// let first = new Promise((resolve,reject) => {

// })
let first = param => {
	return new Promise((resolve,reject) => {
		resolve({a:1,b:2,c:3});
	})
}

let second = param => {
	console.log(param)
	return new Promise((resolve,reject) => {
		resolve('success');
	})
}

first()
.then(second)
.then(data => {
	console.log(data)
})
