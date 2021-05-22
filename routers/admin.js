const router = require("express").Router();
const User = require("../models/User.js");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username }); 

  newUser
    .save()
    .then(() => res.json("User added in server...!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;