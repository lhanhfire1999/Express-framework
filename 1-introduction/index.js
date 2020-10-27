require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var transferRoute = require('./routes/transfer.route');

var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');
var csrfProtection = csrf({ cookie: true });

var app = express();

var port = 3000;

app.set('view engine', 'pug');
//This defaults to the views directory in the application root directory.
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.use(express.static('public'));

app.get('/', function(req,res){
  res.render('index',{
    name: 'Anh'
  });
});

app.use('/users',authMiddleware.requireLogin,userRoute);

app.use('/auth',authRoute);

app.use('/products', productRoute);

app.use('/cart',cartRoute);

app.use('/transfer',authMiddleware.requireLogin,csrfProtection,transferRoute);

app.listen(port,function(){
  console.log('Server listening on port', port);
});

