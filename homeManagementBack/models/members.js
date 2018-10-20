var mongoose = require('mongoose');
var schema = mongoose.Schema;

const Member = new schema({name:String, nickname:String, role:String});

module.exports = mongoose.model('Member', Member);