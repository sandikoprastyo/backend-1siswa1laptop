const router = require('express').Router();
const Donatur = require('../models/Donatur_model');
const verifyToken = require('../routers/verifyToken');
//const { body, validationResult } = require('express-validator');

//! get all donator
router.get('/', verifyToken, (req, res) => {
  Donatur.find()
    .then((donaturs) =>
      res.json({
        success: true,
        message: donaturs,
      }),
    )
    .catch((err) => res.status(400).json('Error: ' + err));
});

//!  delete data donator  by id
router.delete('/:donaturId', verifyToken, async (req, res) => {
    try {
      const deleteDonatur = await Donatur.deleteOne({ _id: req.params.donaturId });
      res.json(deleteDonatur);
    } catch (err) {
      res.json({ message: err });
    }
  });
  

//! post data donatur
router.post('/', verifyToken, async (req, res) => {
  const dataDonatur = new Donatur({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    desc: req.body.desc,
    item_donasi: req.body.item_donasi,
    category: req.body.category,
  });
  try {
    const saveDonatur = await dataDonatur.save();
    res.json(saveDonatur);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
