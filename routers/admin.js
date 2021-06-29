const router = require("express").Router();
const Admin = require("../models/Admin.js");
const verifyToken = require("../routers/verifyToken");


// get all admin
router.get('/', verifyToken, (req, res) => {
  Admin.find().populate('donaturs')
    .then((admin) => res.json({
      success: true,
      message: admin,
    }))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;