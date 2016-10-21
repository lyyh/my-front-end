var express = require('express');
var app = express();
app.use('/index',function(req,res,next){
	// res.redirect(302,'http://example.com')
	res.set({
		"location":"http://example.org"
	})
	res.status(302).end();
})
app.listen(3000,function(err){
	console.log('listening port is',3000);
})
