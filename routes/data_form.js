var mongoose = require('mongoose');

var beaconSchema = new mongoose.Schema({
  "type":String,
  "mac":String,
  //"data":[{
    "timestamp":String,
    "bleName":String,
    "rssi":String,
    "ibeaconUuid": String,
    "ibeaconMajor": String,
    "ibeaconMinor": String,
    "ibeaconTxPower": String,
    "battery": String,
    "rawData":String,
    "gatewayFree": String,
    "gatewayLoad": String,
    "temperature":String,
    "humidity":String
  //}]
})

module.exports = mongoose.model('beacon',beaconSchema);
