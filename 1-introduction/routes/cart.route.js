var express = require('express');
var router = express.Router();
var db =require('../db')
var cartController= require('../controller/cart.controller');

router.get('/add/:productId',cartController.addToCart);

module.exports=router;