const express = require("express");

require("dotenv").config();
const customerRoutes = require("./routes/customers.routes");

const app = express();

app.use(express.json());

app.use("/customers", customerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
