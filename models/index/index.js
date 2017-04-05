var db = require('../../libs/db');
function getList(req,res,callback) {
    db.query("select article.aid,article.title,article.content,article.thumb,article.time,user.nickname,category.cnname from article left join user on article.uid=user.uid left join category on article.cid=category.cid",function (err,rul) {
        callback(rul);
    })
}

module.exports.getList = getList;