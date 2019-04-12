require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

// Requiring passport as we've configured it
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;
var db = require("./models_auth");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "5caeacf6cf6f19ad53cfb4b1",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/productOptionController.js");


// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});