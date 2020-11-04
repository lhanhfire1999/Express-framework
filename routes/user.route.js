var express = require('express');
var multer  = require('multer');

var router = express.Router();
var db =require('../db.js');
var userController= require('../controllers/user.controller.js');
var validate = require('../validate/user.validate.js');

var upload = multer({ dest: './public/uploads/' })

router.get('/', userController.index);

router.get('/cookie',function(req,res){
  res.cookie('user-id',12345);
  res.send('Hello');
});

router.get('/search',userController.search);

router.get('/create',userController.create);

router.get('/:id',userController.get);

router.post('/create',
  upload.single('avatar'), 
  validate.postCreate, 
  userController.postCreate 
);

module.exports=router;