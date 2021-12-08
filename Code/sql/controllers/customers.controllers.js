//
const db = require("../models");
const Customer = db.customers;

async function create(req, res) {
  try {
    if (!req.body.name) {
      res.status(400).send({
        message: "Customer needs a name.",
      });
    }

    const customer = {
      name: req.body.name,
      address: req.body.address,
    };

    Customer.create(customer)
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(500).send({
          message: err.message || "Some error occurred.",
        })
      );
  } catch (error) {
    console.log(error);
  }
}

module.exports = { create };
