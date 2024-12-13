const sequenceGenerator = require('./sequenceGenerator');
const auth = require('../middleware/authenticate');
const Wish = require('../models/wish');
const ObjectId = require('mongoose').Types.ObjectId;


const getWishes = async (req, res, next ) =>  {
    //find all the user's wishes
    console.log("in getWishes");
    // Execute query 
    let query;
    try {
        
        query =  await Wish.find({email: auth.getUserEmail(req)});

        for(let i = 0; i < query.length; i++){
            let newWish = filterWish(query[i]);
            query[i] = newWish;
        }
        
        
        res.status(200).send(JSON.stringify(query));

    } catch (err) {
        console.log(`getWishes error--> ${err}`);
        res.status(400).send(`Could not fetch Wishes.`);
    }
};

const getWishById = async (req, res, next ) =>  {
    //will be used as a findmany to find the books in the use's library
    console.log("in getWishById");
    // Execute query 
    let query;
    try {
        let id = req.params.id;
        query = await Wish.findOne({id: +id});

        console.log(query)
        
        res.status(200).send(JSON.stringify(filterWish(query)));

    } catch (err) {
        console.log(`fetch error--> ${err}`);
        res.status(400).send(`Could not fetch Wish.`);
    }
};


const createWish  = async (req, res, next ) =>  {
    //
    console.log("in createWish");
    let body = req.body;
    try {

        let id = await sequenceGenerator.sequenceGenerator();
        
        await Wish.create({
            id: id, 
            email: auth.getUserEmail(req),
            wish: body.wish,
            note: body.note
            
        })
        
        res.status(200).send(JSON.stringify('Wish Created & Posted to the Database.'));

    } catch (err) {
        console.log(`Wish error--> ${err}`);
        res.status(400).send(`Could not create wish.`);
    }
};

const updateWish = async (req, res, next ) =>  {
    //
    console.log("in updateWish");
    // Execute query 
    let body = req.body;
    try {
        
        let updatedWish =  { 
           
            wish: body.wish,
            note: body.note
           
        }
        

        await Wish.findOneAndUpdate({id: req.params.id}, {$set: updatedWish}, { new: true }); 
        
        res.status(200).send(JSON.stringify('Contact updated!'));

    } catch (err) {
        console.log(`Wish error--> ${err}`);
        res.status(400).send(`Could not update Contact.`);
    }
};


const deleteWish = async (req, res, next ) =>  {
    //
    console.log("in deleteWish");
    // Execute query 
    try {
    
        await Wish.deleteOne({id: +req.params.id});

        res.status(200).send(JSON.stringify('Wish Deleted!'));

    } catch (err) {
        console.log(`Wish error--> ${err}`);
        res.status(400).send(`Could not delete Wish.`);
    }
};

// async function populateGroup(group){
//     console.log("in populateGroup");
    
//     for(let i = 0; i < group.length; i++){
//         let _id = new ObjectId(group[i]);
//         let fullContact = await conMod.findOne({_id: _id});
//         group[i] = fullContact;
//     }
//     return group;
// }

function filterWish(wish){
    console.log('in filterWish');
    let filteredWish = {
        id: +wish.id,
        wish: wish.wish,
        note: wish.note
    };

    return filteredWish;

}

module.exports = {
    getWishes,
    getWishById,
    createWish,
    updateWish,
    deleteWish
};