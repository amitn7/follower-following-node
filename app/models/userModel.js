var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name : String,
    dob : Date,
    followersCount : Number,
    followingCount : Number,
    followers : [],
    following : []
});

module.exports = mongoose.model('User', UserSchema);
