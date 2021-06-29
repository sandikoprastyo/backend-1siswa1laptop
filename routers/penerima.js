const router = require('express').Router();
const Siswa = require('../models/Siswa.js');
const verifyToken = require("../routers/verifyToken");

// get all penerima
router.get('/', verifyToken, (req, res) => {
  Siswa.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
