var db = require('../../libs/db');

function getArticleId(req,res,callback) {
    var aid = req.params.aid;
    db.query("select * from article where aid=?",[aid],function (err,rul) {
        callback(rul[0]);
    })
}
module.exports.getArticleId = getArticleId;