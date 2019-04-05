var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var category = require("../models/category.js");
var productOption = require("../models/productOption.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // 
  // 
  //       SEE HTML-ROUTES
  // 
  // 
});




router.post("/api/category/product/", function(req, res) {
  productOption.create([
   "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/category/product/:productOption", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  productOption.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// TODO: decide if we want delete functionality
// router.delete("/api/category/product/:productOption", function(req, res) {
//   var condition = "id = " + req.params.id;

//   productOption.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
