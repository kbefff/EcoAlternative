// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var category = require("../models/category.js");
var product = require("../models/product.js");
var connection = require("../config/connection.js");



module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    };

    // get all values in the category table
    category.all(function (data) {
      var hbsObject = {
        // 
        categories: data
      };
      res.render("index", hbsObject);
    });

    // res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // go to specific clicked on product
  app.get("/product", function (req, res) {
    // // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    };

    // get all values in the product table
    product.all(function (data) {
      var hbsObject = {
        products: data
      };
      res.render("product", hbsObject);
    });


  });

  // when user clicks on any element from product table, trigger ajax to get /product/:id then we will see productOptions.all
  // show the products on the product page
  app.get("/product/:id", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    };

    // TODO: refactor for orm
    connection.query("SELECT * FROM productOption WHERE id = ?", [req.params.id], function (err, data) {
      if (err) return res.status(500).end();
      var hbsObject = {
        products: data
      };
      res.render("productOption", hbsObject);
    });
  });




  
  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    };
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};