/**
 * Created by Administrator on 15-12-8.
 */
var express = require('express');
var router = express.Router();
var demoService = require("../service/DemoService");

router.post("/add",function(req,res){
    var data=[req.body.content,req.body.date,req.body.userId,req.body.userName,req.body.id];
    demoService.addMessage(data,function(){
        res.send("添加成功");
    })
});
router.post("/show",function(req,res){
    demoService.showMessage(req.body.id,function(r){
       res.send(r)
   })
});
module.exports = router;