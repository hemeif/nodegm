var express = require('express');
var router = express.Router();
var regModel = require('../models/index/login');
router.get('/', function(req, res, next) {
    res.render('index/reg',{});
});
router.post('/',function (req,res) {
    regModel.addUser(req,res);
})

module.exports = router;
