var express = require('express');
var router = express.Router();
var userModel=require('../models/index/login');
// console.log('../../models/index/login')
router.get('/', function(req, res, next) {
    res.render('index/login',{});
});
router.post('/',function (req,res) {
    userModel.checkUser(req,res);
});
module.exports = router;