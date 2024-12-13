let Sequence = require('../models/sequence');



var maxWishId;
var sequenceId = null;

async function sequenceGenerator(collectionType) {
  let query;
  
  try{
   query = await Sequence.findOne();
  

    
  }catch(err){
      console.log('cannot query sequence')
  }


  sequenceId = query._id;
 
  maxWishId = +query.maxWishId;

  var updateObject = {};
  var nextId;

    maxWishId++;
    updateObject = {maxWishId: maxWishId};
    nextId = maxWishId;

  await Sequence.findOneAndUpdate({_id: sequenceId}, {$set: updateObject}, { new: true }); 


  return nextId;
}

module.exports = {sequenceGenerator};
 