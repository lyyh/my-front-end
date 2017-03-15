process.on('message',function(data){
	console.log(data)
})
process.send({foo:'bar'});