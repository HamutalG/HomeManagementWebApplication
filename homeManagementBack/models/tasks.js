var mongoose = require('mongoose');
var schema = mongoose.Schema;

const Task = new schema({title:String, body:String, date:String, isDone:Boolean, memberName:String});

module.exports = mongoose.model('Task', Task);