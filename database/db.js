const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "MyData",
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
