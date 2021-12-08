const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://bbc7:THISisa1234@cluster0.vmqlf.mongodb.net/isobel?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Database connected");
    const bookRoutes = require("./routes/customers.routes");

    const app = express();
    app.use(express.json());
    app.use("/books", bookRoutes);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}.`);
    });
  });
