// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config();
const accountSid = process.env.TWILIO__ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: "Hello, and Welcome to SFC Delivery!  Please type in a [Keyword] to continue with your order. [FAV ORDER],[NEW ORDER], [HELP], [END]",
     from: '+18315851048',
     to: '+19083070331'
   })
  .then(message => console.log("A message has been sent, with ID: " + message.sid));
