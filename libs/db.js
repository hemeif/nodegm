var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'blog'
});
connection.connect(function (err) {
    if(err){
        console.log(err)
    }
})

module.exports =connection;