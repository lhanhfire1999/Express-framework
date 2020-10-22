var express = require('express');

var productController= require('../controller/product.controller');

var router = express.Router();

router.get('/',productController.index);

module.exports=router;