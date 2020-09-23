var express = require('express');
var app = express();
var port = 3000;

var bodyParser = require('body-parser')

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


var users = [
	{id:1 , name:'Anh'},
	{id:2 , name:'Long'},
	{id:3 , name:'Hoang'}
];


app.get('/', function(req,res){
	res.render('index',{
		name: 'Anh'
	});
});

app.get('/users',function(req,res){
	res.render('users/index.pug',{
		users: users
	});
});

app.get('/users/search',function(req,res){
	var q = req.query.q;
	var matchUsers = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
	});

	res.render('users/index.pug',{
		users: matchUsers,
		query:q
	});
});

app.get('/users/create',function(req,res){
	res.render('users/create.pug');
});
app.post('/users/create',function(req,res){
	users.push(req.body);
	res.redirect('/users');
});
	

app.listen(port,function(){
	console.log('Server listening on port', port);
});

