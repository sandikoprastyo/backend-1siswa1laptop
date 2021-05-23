const router = require("express").Router();
const User = require("../models/User.js");
const verifyToken = require("../routers/verifyToken");


// get all admin
router.get('/', verifyToken, (req, res) => {
  User.find()
    .then((users) => res.json({
      success: true,
      message: users,
    }))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;