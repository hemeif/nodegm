var db = require('../../libs/db');

function getArticle(req,res,callback) {
    var uid = req.session.uid;
    db.query("select * from article where uid=?",[uid],function (err,rul) {
        callback(rul);
    })
}
module.exports.getArticle = getArticle;