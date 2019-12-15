// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACd97fdcd00129ead293b359a4cff4e9c3';
const authToken = '6d04b83901fbf10efb4b2c2b218b5880';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+18315851048',
     to: '+19083070331'
   })
  .then(message => console.log(message.sid));
