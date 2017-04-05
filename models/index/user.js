var db = require('../../libs/db');
var crypto = require('crypto');


function addUser(req,res) {
    var md5 = crypto.createHash('md5')
    var p = md5.update(req.body.password).digest('hex')
    var data = [];
    data.push(req.body.username);
    data.push(p);
    data.push(req.body.nickname)
    db.query('insert into user (username,password,nickname)values(?,?,?)',data,function (err,rul,fields) {
        if(rul.affectedRows>0){
            req.flash('success',"注册成功");
            res.redirect("/login");
        }else{
            req.flash('error',"注册失败");
            res.redirect('/reg');
        }
    })
}


function checkUser(req,res) {
    var md5 = crypto.createHash('md5');
    var u = req.body.username;
    var p =md5.update(req.body.password).digest('hex');
    db.query('select * from user where username=?',[u],function (err,rul) {
        if(rul.length==0){
            req.flash('error','用户名不存在');
            res.redirect('/login');
        }else{
            if(p==rul[0].password){
                req.session.uid = rul[0].uid;
                req.session.username = rul[0].username;
                req.session.nickname = rul[0].nickname;
                req.flash('success','登陆成功');
                res.redirect('/');
            }else{
                req.flash('error','密码错误');
                res.redirect('/login');
            }
        }
    })
}
module.exports.addUser = addUser;
module.exports.checkUser = checkUser;
