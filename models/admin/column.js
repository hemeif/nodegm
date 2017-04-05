var db = require('../../libs/db');
function getCategory(req,res,callback) {
    db.query("select * from category",function (err,rul) {
        callback(rul);
    })
}
function addCategory(req,res) {
    var data =[];
    data.push(req.body.cnname)
    data.push(req.body.enname)
    data.push(req.body.isshow)

    db.query("insert into category (cnname,enname,isshow)values(?,?,?)",data,function (err,rul) {
        if(rul.affectedRows>0){
            req.flash('success',"插入成功")
        }else{
            req.flash('error',"插入失败")
        }
        res.redirect('/admin/column');
    })
}

function getCategoryId(req,res,callback) {
    var cid = req.params.cid;
    db.query("select * from category where cid=?",[cid],function (err,rul) {
        callback(rul);
    })
}
module.exports.getCategory = getCategory;
module.exports.addCategory = addCategory;
module.exports.getCategoryId = getCategoryId;
