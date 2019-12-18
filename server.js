require("dotenv").config();
var express = require("express");
//var exphbs = require("express-handlebars");
// var ejs = require('ejs');
var db = require("./models");
var bodyParser = require("body-parser");
var twilio = require("twilio");
var accountSid = process.env.TWILIO__ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = new twilio(accountSid, authToken);
var MessagingResponse = require('twilio').twiml.MessagingResponse;

var app = express();
var PORT = process.env.PORT || 3000;


// Middleware
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//Handlebars
// app.engine("ejs");
app.set("view engine", "ejs");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//twilio message handling



// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
