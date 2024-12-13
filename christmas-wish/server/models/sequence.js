const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
   maxWishId: { type: Number}
}, {collection: 'sequences'});

module.exports = mongoose.model('Sequence', sequenceSchema);