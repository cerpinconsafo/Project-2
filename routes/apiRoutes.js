var db = require("../models");

module.exports = function(app) {
  // Get all the data from inventory
  app.get("/api/inven", function(req, res) {
    db.Store.findAll({}).then(function(dbStore) {
      res.json(dbStore);
    });
  });

  // Create a new example
  app.post("/api/inven", function(req, res) {
    db.Store.create(req.body).then(function(dbStore) {
      res.json(dbStore);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
