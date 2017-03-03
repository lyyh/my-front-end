var promise = new Promise(function(resolve, reject) {
  resolve(function(){
  	console.log(123)
  })
});
promise.then(function(fn) {
	fn()
});