const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
 
   email: { type: String, required: true },
   firstName: { type: String, required: true },
   lastName:  { type: String, required: true },
   latestCode: { type: Number},
   isLoggedIn: {type: Boolean, default: false}

});

module.exports = mongoose.model('User', userSchema);