var db = require('../../libs/db');

function addArticle(req,res){
    var data = [];
    data.push(req.body.title);
    data.push(req.body.content);
    data.push(req.body.uid);
    data.push(req.body.cid);
    data.push(req.body.thumb);
    db.query('insert into article (title,content,uid,cid,thumb)values(?,?,?,?,?)',data,function (err,rul) {
        if(err){
            req.flash('error','新增失败');
        }else if(rul.affectedRows>0){
            req.flash('success','新增成功');
        }
        res.redirect('/addarticle');
    })
}

module.exports.addArticle = addArticle;