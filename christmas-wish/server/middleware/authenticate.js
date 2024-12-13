const loginController = require('../controllers/login');

function authenticate(req, res, next){
    console.log('in auth');
    // console.log(loginController.userSessions)
    let sessionId = req.headers.cookie?.split('=')[1];
    let userSession = loginController.userSessions[sessionId];
    // console.log(userSession);
    if(!userSession){
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