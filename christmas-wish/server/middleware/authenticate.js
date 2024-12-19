const loginController = require('../controllers/login');
const User = require('../models/user');



async function authenticate(email){

    console.log('in auth');

    let query =  await User.findOne({email: email});

    if(!query.isLoggedIn){
        return res.status(401).send('Not Logged In');
    }else{
        next();
    }
}

function getUserEmail(req){
    let sessionId = req.headers.cookie?.split('=')[1];
    let userSession = loginController.userSessions[sessionId];
   
    return userSession.email;
}

module.exports = {authenticate,
    getUserEmail
};