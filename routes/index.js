var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var id = uuid.v4();
var mongoose = require('mongoose');
var DataSchema = require('./data_form.js');
mongoose.connect('mongodb://mongo:27017/beaconSchema', { useNewUrlParser: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(id);
});

router.post('/insert', function(req, res, next) {

  var New_Data = JSON.stringify(req.body);
  var jsoncontent = eval(New_Data);//jsoncontent[0]...
  console.log(Object.keys(jsoncontent).length);

  for (var i=0; i<Object.keys(jsoncontent).length; i++){
    DataSchema.create(jsoncontent[i], function() {
      res.send();

    });
  }

});

module.exports = router;
