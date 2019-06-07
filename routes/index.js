var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var DataSchema = require('./data_form.js');
mongoose.connect('mongodb://localhost:27017/Smart', { useNewUrlParser: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', function(req, res, next) {

  var New_Data = JSON.stringify(req.body);
  var jsoncontent = eval(New_Data);//jsoncontent[0]...
  console.log(Object.keys(jsoncontent).length);
  //res.send(jsoncontent.type);

  for (var i=0; i<Object.keys(jsoncontent).length; i++){
    DataSchema.create(jsoncontent[i], function() {});
  }
  res.send(success);

});

module.exports = router;
