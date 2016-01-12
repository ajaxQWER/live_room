/**
 * Created by Administrator on 15-12-8.
 */
var demoDAO = require("../dao/DemoDAO");
exports.addMessage = function(data,func){
    demoDAO.addMessage(data,function(){
        func();
    });
};
exports.showMessage = function(id,func){
    demoDAO.showMessage(id,function(r){
      func(r);
  });
};