var express = require('express');
var router = express.Router();
var articleModel = require('../models/index/article' );
router.get('/', function(req, res, next) {
    res.render('index/addarticle');
});
router.post('/',function (req,res) {
    articleModel.addArticle(req,res);
})
module.exports = router;
