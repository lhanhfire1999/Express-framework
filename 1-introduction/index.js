var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request,respone){
	respone.send('<h1> Hello Coders.Tokyo <h1>');
});

app.get('/users',function(request,respone){
	respone.send('User list');
});

app.listen(port,function(){
	console.log('Server listening on port', port);
});