var express = require('express');
var app = express();
var userRoute = require('./routes/user.route.js');

var port = 3000;

app.set('view engine', 'pug');
//This defaults to the views directory in the application root directory.
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req,res){
	res.render('index',{
		name: 'Anh'
	});
});

app.use('/users',userRoute);

app.listen(port,function(){
	console.log('Server listening on port', port);
});

