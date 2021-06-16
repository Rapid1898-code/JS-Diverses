let nodemailer = require('nodemailer');
require("dotenv").config({ path: "./config/.env" });

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'markuspolzer73@gmail.com',
//     pass: process.env.GMAIL_TOKEN   
//   }
// });

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'markuspolzer73@gmail.com',
      accessToken: process.env.GMAIL_TOKEN
  }
});

let mailOptions = {
  from: 'markuspolzer73@gmail.com',
  to: 'rapid1898@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});