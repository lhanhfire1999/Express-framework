var express = require('express');

var transferController= require('../controller/transfer.controller');

var router = express.Router();

router.get('/create',transferController.create);

router.post('/create',transferController.postCreate);

module.exports=router;