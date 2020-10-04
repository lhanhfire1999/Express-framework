var express = require('express');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middleware/auth.middleware')

var app = express();

var port = 3000;

app.set('view engine', 'pug');
//This defaults to the views directory in the application root directory.
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use(express.static('public'));

app.get('/', function(req,res){
  res.render('index',{
    name: 'Anh'
  });
});

app.use('/users',authMiddleware.requireLogin,userRoute);

app.use('/auth',authRoute);

app.listen(port,function(){
  console.log('Server listening on port', port);
});

