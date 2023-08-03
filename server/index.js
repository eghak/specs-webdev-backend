const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

const db = require("./util/database");
const { User } = require("./util/models");

const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS //
// GET all
app.get("/api/getUser", (req, res) => {
  let userData = User.findAll(); // select *
  console.log(userData);
  res.status(200).send(userData);
});

// GET specific user with an id param
app.get("/api/getUser/:id", (req, res) => {
  let { id } = req.params;
  let user = User.findOne({
    where: { id },
  });
  res.status(200).send(user);
});

app.post("/api/register", (req, res) => {
  let newUser = User.create(req.body); //when the body keys' name is the same like columns's name, we can just type 'req.body'
  res.status(200).send("account created!", newUser);
});

app.put("/api/update/:id/:newUsername", (req, res) => {
  let { id } = req.params;
  let { newUsername } = req.params;
  User.update({ username: newUsername }, { where: { id } });
  res.status(200).send("account updated!");
});

app.delete("/api/delete/:id", (req, res) => {
  console.log(req.params);
  let { id } = req.params;
  User.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).send("account deleted!");
});
//////////////

db.sync();

app.listen(PORT, () => console.log("server is running"));
