const nodemailer = require('nodemailer');
const uuidv4 = require('uuid').v4;
const User = require('../models/user');

var userSessions = {};

const sendLoginCode = async (req, res, next ) =>  {
    //
    console.log("in sendCode");
    let body = req.body;
    try {

        //see if user email is connected to an existing user. If not return 400 status and message to create an accout.
        let query = await User.findOne({email: body.email });
        if(!query){
            res.status(401).send(JSON.stringify('This email is not registered . Try creating an account.'));
        }else{
            let code = generateRandomCode();

            await User.findOneAndUpdate({email: query.email}, {$set: {latestCode: code}}, { new: true }); 
    
            // await sendCodeToEmail(query.email, query.firstName, code);
            
            res.status(200).send(JSON.stringify('Login code sent to email'));
        }

    } catch (err) {
        console.log(`library error--> ${err}`);
        res.status(400).send(`Could not send code. Please try again later.`);
    }
};

const userLogin = async (req, res, next ) =>  {
    //
    console.log("in userLogin");
    let body = req.body;
    try {

        //see if user email is connected to an existing user. If not return 400 status and message to create an accout.
        let query = await User.findOne({email: body.email });
        if(!query){
            res.status(406).send(JSON.stringify('This email is not registered . Try creating an account.'));
        }else{
            let code = query.latestCode;

            //set latestCode to null so that it can't be used a second time. If the code is entered incorrectly
            //the user will have to get another code send to their email. 
            //one attempt per code.
            // await User.findOneAndUpdate({email: query.email}, {$set: {latestCode: null}}, { new: true });

            if(code === +body.code){
                
                const sessionId = uuidv4();
                userSessions[sessionId] = {email: query.email};

                console.log(userSessions[sessionId]);
                res.set('Set-Cookie', `session=${sessionId}`);
                res.send('success');

            }else{
                res.status(401).send(JSON.stringify('Incorrect security code. Have another code sent to your email.'));
            }
            
            
        }

    } catch (err) {
        console.log(`library error--> ${err}`);
        res.status(400).send(`Could not login. Please try again later.`);
    }
};

const userLogOut = (req, res, next) => {
    res.set('Set-Cookie', 'session=, expires=Thu, 01 Jan 1970 00:00:00 GMT');
    res.status(200).send('Log Out successful.');
}

function generateRandomCode() {
    return Math.floor(1000 + Math.random() * 9000);
}

async function sendCodeToEmail(email, firstName, code){
    var transporter = nodemailer.createTransport({
        host: 'smtp.mailersend.net',
        port: 587,
        auth: {
          user: 'MS_Kn0wRV@trial-3vz9dle8vp6lkj50.mlsender.net',
          pass: 'N7ylnVFhxCoudvPO'
        }
      });
      
      var mailOptions = {
        from: 'christmas-wish@trial-3vz9dle8vp6lkj50.mlsender.net',
        to: `${email}`,
        subject: 'No Reply: One Time Login Code',
        text: `${firstName},
        \nChristmas Wish here! 
        \nHere is your one time login code: ${code}
        \n Santa is waiting to hear your wishes.
        \n Merry Christmas!`
      };
      
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = {
    sendLoginCode,
    userLogin,
    userLogOut,
    userSessions
};