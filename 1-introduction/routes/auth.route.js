var express = require('express');

var authController= require('../controller/auth.controller');

var router = express.Router();

router.get('/login', authController.login);

router.post('/login',authController.postLogin);

module.exports=router;