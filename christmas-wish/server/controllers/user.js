const User = require('../models/user');
const loginController = require('../controllers/login');

const getUser = async (req, res, next ) =>  {
    console.log("in getUser");
    let params = req.params;
    try {

        //see if user email is connected to an existing user
        let query = await User.findOne({email: params.email });

        let filteredUser = filterUser(query);
            
            res.status(200).send(JSON.stringify(filteredUser));
        

        

    } catch (err) {
        console.log(`user error--> ${err}`);
        res.status(400).send(`Could not fetch user. Please try again later.`);
    }


}

const createUser = async (req, res, next ) =>  {
    //
    console.log("in sendCode");
    let body = req.body;
    try {

        //see if user email is connected to an existing user
        let query = await User.findOne({email: body.email });
        if(!query){

        
        
            await User.create({
            
                email: body.email,
                firstName: body.firstName,
                lastName: body.lastName,
                latestCode: null
            })
            
            res.status(200).send(JSON.stringify('User Created.'));
        }else{
            res.status(401).send(JSON.stringify('This email is already attached to an existing user. Try logging in.'));
        }

        

    } catch (err) {
        console.log(`library error--> ${err}`);
        res.status(400).send(`Could not create user. Please try again later.`);
    }
};



const updateUser = async (req, res, next ) =>  {
    //will be used as a findmany to find the books in the use's library
    console.log("in updateUser");
    // Execute query 
    let body = req.body;
    try {
        
        let updatedData = {
            
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName  
        };
        

        await User.findOneAndUpdate({email: req.params.email}, {$set: updatedData}, { new: true }); 
        
        res.status(200).send(JSON.stringify('User updated!'));

    } catch (err) {
        console.log(`user error--> ${err}`);
        res.status(400).send(`Could not update user.`);
    }
};


const deleteUser = async (req, res, next ) =>  {
    
    console.log("in deleteUser");
    // Execute query 
    try {
    
        await User.deleteOne({email: req.params.email});

        res.status(200).send(JSON.stringify('User Deleted!'));

    } catch (err) {
        console.log(`User error--> ${err}`);
        res.status(400).send(`Could not delete User.`);
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

function filterUser(user){
    console.log('in filterUser');
    console.log(user);
    let filterUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    };

    return filterUser;

}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
};