const router = require("express").Router();
const Admin = require("../models/admin_model.js");

router.route("/").get((req, res) => {
  Admin.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username }); 

  newUser
    .save()
    .then(() => res.json("Admin added in server...!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;