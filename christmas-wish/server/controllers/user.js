const User = require('../models/user');
const loginController = require('../controllers/login');



const createUser = async (req, res, next ) =>  {
    //
    console.log("in sendCode");
    let body = req.body;
    try {

        //see if user email is connected to an existing user
        let query = await User.findOne({email: body.email });
        if(!query){
            let code = loginController.generateRandomCode();

        
        
            await User.create({
            
                email: body.email,
                firstName: body.firstName,
                lastName: body.lastName,
                latestCode: code
                
            })

            await loginController.sendCodeToEmail(body.email, body.firstName, code);
            
            res.status(200).send(JSON.stringify('User Created. Login code sent to email'));
        }else{
            res.status(401).send(JSON.stringify('This email is already attached to an existing user. Try logging in.'));
        }

        

    } catch (err) {
        console.log(`library error--> ${err}`);
        res.status(400).send(`Could not create user. Please try again later.`);
    }
};



// const putContact = async (req, res, next ) =>  {
//     //will be used as a findmany to find the books in the use's library
//     console.log("in getContacts");
//     // Execute query 
//     let body = req.body;
//     try {
        
//         let updatedDoc =  { 
//             name: body.name,
//             email: body.email,
//             phone: body.phone,
//             imageUrl: body.imageUrl,
//             group: body.group
//         }
        

//         await conMod.findOneAndUpdate({id: req.params.id}, {$set: updatedDoc}, { new: true }); 
        
//         res.status(200).send(JSON.stringify('Contact updated!'));

//     } catch (err) {
//         console.log(`library error--> ${err}`);
//         res.status(400).send(`Could not update Contact.`);
//     }
// };


// const deleteContact = async (req, res, next ) =>  {
//     //will be used as a findmany to find the books in the use's library
//     console.log("in deleteContacts");
//     // Execute query 
//     try {
    
//         await conMod.deleteOne({id: req.params.id.toString()});

//         res.status(200).send(JSON.stringify('Contact Deleted!'));

//     } catch (err) {
//         console.log(`library error--> ${err}`);
//         res.status(400).send(`Could not delete Contact.`);
//     }
// };

// async function populateGroup(group){
//     console.log("in populateGroup");
    
//     for(let i = 0; i < group.length; i++){
//         let _id = new ObjectId(group[i]);
//         let fullContact = await conMod.findOne({_id: _id});
//         group[i] = fullContact;
//     }
//     return group;
// }


module.exports = {
    createUser
};