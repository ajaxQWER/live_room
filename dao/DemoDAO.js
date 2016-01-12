/**
 * Created by Administrator on 15-12-8.
 */
var db = require("./database");
exports.addMessage = function(data,func){
    db.query("insert into live_room(pId,roomId,head,status,uName,nikName,content,time) values(?,?,?,?,?)",data,function(){
        func();
    });
};
exports.showMessage = function(id,func){
    db.query("select * from live_room where id=?",id,function(r){
        func(r);
    });
};