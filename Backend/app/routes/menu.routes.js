module.exports = app => {
  const menus = require("../controllers/menu.controller.js");

  var router = require("express").Router();

  // Create a new menu
  router.post("/", menus.create);

  // Retrieve all menu
  router.get("/", menus.findAll);

  // Retrieve all published menu
  router.get("/published", menus.findAllPublished);

  // Retrieve a single menu with id
  router.get("/:id", menus.findOne);

   // Update a menu with id
router.put("/:id", menus.update);

// Delete a menu with id
router.delete("/:id", menus.delete);

// Create a new menu
router.delete("/", menus.deleteAll);

app.use('/api/menus', router);
};