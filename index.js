const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
require("./database/db.js");
const User = require("./models/User.js");
dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add", async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Server is Working");
});
