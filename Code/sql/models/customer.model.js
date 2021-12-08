function instantiate(sequelize, Sequelize) {
  const Customer = sequelize.define("customer", {
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
  });
  return Customer;
}

module.exports = instantiate;
