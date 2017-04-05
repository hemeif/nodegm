var express=require('express');
var router=express.Router();

router.get('/',function (req,res) {
    res.render('admin/admin',{title:'注册页'})

});
router.get('/info',function (req,res) {
    res.render('admin/info',{title:'消息页'})
});
router.get('/pass',function (req,res) {
    res.render('admin/pass',{title:'注册页'})
});
router.get('/page',function (req,res) {
    res.render('admin/page',{title:'注册页'})
});
router.get('/adv',function (req,res) {
    res.render('admin/adv',{title:'注册页'})
});
router.get('/book',function (req,res) {
    res.render('admin/book',{title:'注册页'})
});
router.get('/column',function (req,res) {
    res.render('admin/column',{title:'注册页'})
});
router.get('/list',function (req,res) {
    res.render('admin/list',{title:'注册页'})
});
router.get('/add',function (req,res) {
    res.render('admin/add',{title:'注册页'})
});
router.get('/cate',function (req,res) {
    res.render('admin/cate',{title:'注册页'})
});

module.exports = router;


