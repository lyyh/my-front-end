process.on('message',function(data){
	console.log(data)
})
process.sned({foo:'bar'});