var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var id = uuid.v4();
var mongoose = require('mongoose');
var DataSchema = require('./data_form.js');
mongoose.connect('mongodb://localhost:27017/Smart', { useNewUrlParser: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(id);
});

router.post('/insert', function(req, res, next) {

  var New_Data = JSON.stringify(req.body);
  var jsoncontent = eval(New_Data);//jsoncontent[0]...
  console.log(Object.keys(jsoncontent).length);
  //res.send(jsoncontent.type);
/*
  for (var i=0; i<Object.keys(jsoncontent).length; i++){
    var schema = new DataSchema();
    schema.data = jsoncontent[i];
    schema.type = jsoncontent[i].type;
    schema.mac = jsoncontent[i].mac;

    console.log(schema.mac+"-------------");

    DataSchema.findOne({'mac':schema.mac}, function(err, datahistory){
      //비콘을 처음 발견한 경우 데이터베이스 새로 생성
      if (datahistory==null) DataSchema.create(schema, function() {console.log("생성");});
       //기존에 데이터가 존재하는 경우
      else {
        var DATA = datahistory.data;
        DATA.push(schema.data)

        datahistory.update({'data':DATA}, function() {console.log("추가");});
      }
    })
  }
  */
  for (var i=0; i<Object.keys(jsoncontent).length; i++){
    DataSchema.create(jsoncontent[i], function() {});
  }
  res.send(success);

});

module.exports = router;
