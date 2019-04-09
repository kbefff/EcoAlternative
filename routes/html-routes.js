// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var category = require("../models/category.js");
var product = require("../models/product.js");
var connection = require("../config/connection.js");



module.exports = function (app) {

  // go to specific clicked on product
  app.get("/product", function (req, res) {


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

    // TODO: refactor for orm
    connection.query("SELECT * FROM productOption WHERE product_id = ?", [req.params.id], function (err, data) {
      if (err) return res.status(500).end();
      var hbsObject = {
        productOptions: data
      };
      res.render("productOption", hbsObject);
    });
  });
  
  //Dynamic routing to return our categories to the page
  app.get("/category/:id", function (req, res) {

    // TODO: refactor for orm
    connection.query("SELECT * FROM product WHERE category_id = ?", [req.params.id], function (err, data) {
      if (err) return res.status(500).end();
      var hbsObject = {
        products: data
      };
      res.render("product", hbsObject);
    });
  });

  //Route to render our login page
  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    };
    res.render("login");
  });
  
  //Route to render the sign up page
  app.get("/signup", function (req, res) {

    res.render("signup");
  });
  //route to render the create new product page
  app.get("/addproduct", function (req, res) {

    res.render("form");
  });

  //Route to render our abut us page
  app.get("/aboutus", function (req, res) {

    res.render("aboutus")
  })


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  app.get("/", function (req, res) {
    // get all values in the category table
    category.all(function (data) {
      var hbsObject = {
        // 
        categories: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
};