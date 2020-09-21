var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req,res){
	res.render('index',{
		name: 'Anh'
	});
});

app.get('/users',function(req,res){
	res.render('users/index',{
		users:[
		{id:1 , name:'Anh'},
		{id:2 , name:'Anh3'},
		{id:3 , name:'Anh2'}
		]
	});
});

app.listen(port,function(){
	console.log('Server listening on port', port);
});

