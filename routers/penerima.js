const router = require('express').Router();
const User = require('../models/User.js');
const verifyToken = require("../routers/verifyToken");

// get all penerima
router.get('/', verifyToken, (req, res) => {
  User.find({role: 'penerima'})
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
