var express = require('express');
var router = express.Router();
var showModel = require('../models/index/show');
router.get('/:aid', function(req, res, next) {
    showModel.getArticleId(req,res,function (rul) {
        res.render('index/show',{content:rul});
    })
});
module.exports = router;
