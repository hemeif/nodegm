var express = require('express');
var router = express.Router();
var indexModel = require('../models/index/index');
router.get('/', function(req, res, next) {
    indexModel.getList(req,res,function (rul) {
        res.render('index/category', {lists:rul});
    })
});
module.exports = router;