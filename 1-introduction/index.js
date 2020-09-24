// Express-setup
var express = require('express');
var app = express();
var port = 3000;
//shortID for database-setup
var shortid = require('shortid');
//req-body setup
var bodyParser = require('body-parser');
//Database setup
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

db.defaults({ users: [] }).write();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//GET Method
app.get('/', function(req,res){
	res.render('index',{
		name: 'Anh'
	});
});

app.get('/users',function(req,res){
	res.render('users/index.pug',{
		users: db.get('users').value()
	});
});

app.get('/users/search',function(req,res){
	var q = req.query.q;
	var matchUsers = db.get('users').value().filter(function(user){
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

app.get('/users/:id',function(req,res){
	var id = req.params.id;
	var user = db.get('users').find({ id : id}).value();
	console.log(user);
	res.render('users/view',{
		user:user
	});

});

//POST Method
app.post('/users/create',function(req,res){
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
});
	

app.listen(port,function(){
	console.log('Server listening on port', port);
});

