var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello World - Harini');
});

app.listen(8080,function(){
	console.log('App is listening port 8080');
});
