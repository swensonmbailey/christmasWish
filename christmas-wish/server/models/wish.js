const mongoose = require('mongoose');

const wishSchema = mongoose.Schema({
   id: {type: Number, required: true},
   email: { type: String, required: true},
   wish: { type: String, required: true },
   note:  { type: String}
});

module.exports = mongoose.model('Wish', wishSchema);