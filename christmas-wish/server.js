const express = require('express');
const app = express();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const dotEnv = require('dotenv');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
dotEnv.config();

const port = 3000;

app
 .use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
 })
  .use('/', require('./server/routes'));




process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});


app.listen(process.env.PORT || port);




async function connectToDb() {
  
  try{
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to database!');
  }
  catch(err){
    console.log('Connection failed: ' + err);
  }
} 

connectToDb();


// var transporter = nodemailer.createTransport({
//     host: 'smtp.mailersend.net',
//     port: 587,
//     auth: {
//       user: 'MS_Kn0wRV@trial-3vz9dle8vp6lkj50.mlsender.net',
//       pass: 'N7ylnVFhxCoudvPO'
//     }
//   });
  
//   var mailOptions = {
//     from: 'christmas-wish@trial-3vz9dle8vp6lkj50.mlsender.net',
//     to: 'swensonmbailey@gmail.com',
//     subject: 'Node test email',
//     text: 'Did it work?'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });




