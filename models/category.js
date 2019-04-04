// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var category = {
  all: function(cb) {
    orm.all("category", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("category", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("category", objColVals, condition, function(res) {
      cb(res);
    });
  }
  // delete: function(condition, cb) {
  //   orm.delete("category", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (categoriesController.js).
module.exports = category;
