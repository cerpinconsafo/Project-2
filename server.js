require("dotenv").config();
var express = require("express");
//var exphbs = require("express-handlebars");
// var ejs = require('ejs');
var db = require("./models");
var MessagingResponse = require('twilio').twiml.MessagingResponse;

var app = express();
var PORT = process.env.PORT || 3000;


// Middleware
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
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Booboo is a rare and viscious creature.  She sometimes appears seemingly out of nowhere!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

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
