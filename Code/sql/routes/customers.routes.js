const router = require("express").Router();
const customers = require("../controllers/customers.controllers.js");

// Create a new Customer
router.post("/", customers.create);

// Retrieve all Customers
router.get("/", customers.getAll);

// Retrieve all checked out Customers

// Retrieve a single Customer with id

// Update a Customer with id

// Delete a Customer with id

// Delete all Customers

module.exports = router;
