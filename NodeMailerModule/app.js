const nodemailer = require('nodemailer');
const { google } = require('googleapis')

const CLIENT_ID = "224282922394-hhn37ak9pra7rgtjjnecc0espjqgfl8k.apps.googleusercontent.com"
const CLIENT_SECRET = "FuA0daJnvRk8B1kLpCAKlHhL"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04TdUahq8JbZmCgYIARAAGAQSNwF-L9IrU7mM6PwLyzAJ0ajtT12edZtaZ0Kx2JeyEYqwHCVRXe8pfWbMxXG3sauMWNdRMd_ql2c"

// TRY ONE:
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAUTH2",
        user: "markuspolzer73@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailOptions = {
        from: "markuspolzer73@gmail.com",
        to: "rapid1898@gmail.com",
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: "<h1>That was easy!</h1>"
    }

    const result = transport.sendMail(mailOptions)
    return result



  } catch (error) {
    return error
  }
}

sendMail().then(result => console.log("Email sent...", result))
.catch(error => console.log(error.message))


// // Try TWO:
// var smtpTransport = nodemailer.createTransport("SMTP", {
//   service: "Gmail",
//   auth: {
//     XOAuth2: {
//       user: "markuspolzer73@gmail.com", // Your gmail address.
//                                             // Not @developer.gserviceaccount.com
//       clientId: "224282922394-hhn37ak9pra7rgtjjnecc0espjqgfl8k.apps.googleusercontent.com",
//       clientSecret: "FuA0daJnvRk8B1kLpCAKlHhL",
//       refreshToken: "1//04TdUahq8JbZmCgYIARAAGAQSNwF-L9IrU7mM6PwLyzAJ0ajtT12edZtaZ0Kx2JeyEYqwHCVRXe8pfWbMxXG3sauMWNdRMd_ql2c"
//     }
//   }
// });

// var mailOptions = {
//   from: "markuspolzer73@gmail.com",
//   to: "rapid1898@gmail.com",
//   subject: "Hello",
//   generateTextFromHTML: true,
//   html: "<b>Hello world</b>"
// };

// smtpTransport.sendMail(mailOptions, function(error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
//   smtpTransport.close();
// });










