var express = require('express');
var router = express.Router();
var gerenModel = require('../models/index/geren');

router.get('/', function(req, res, next) {
    gerenModel.getArticle(req,res,function (rul) {
        res.render('index/user',{ars:rul});
    })
});

module.exports = router;
