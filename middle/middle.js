//判断是否登陆
// /login  /reg
function isLogin(req,res,next) {
    if(req.session.username){
        res.redirect('back');
    }
    next();
}

// /user  /add
function isNotLogin(req,res,next) {
    if(!req.session.username){
        req.flash('error','请登录');
        res.redirect('/login')
    }
    next();
}

module.exports.isLogin = isLogin;
module.exports.isNotLogin = isNotLogin;