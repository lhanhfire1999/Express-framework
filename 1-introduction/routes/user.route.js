var express = require('express');
var router = express.Router();
var db =require('../db.js')
var userController= require('../controller/user.controller.js');

router.get('/', userController.index);

router.get('/search',userController.search);

router.get('/create',userController.create);

router.get('/:id',userController.get);

router.post('/create',userController.postCreate);

module.exports=router;