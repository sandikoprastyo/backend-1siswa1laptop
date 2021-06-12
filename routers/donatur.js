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

//! get by id donator
router.get('/:id', verifyToken, (req, res) => {
  Donatur.findById(req.params.id)
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
    const deleteDonatur = await Donatur.deleteOne({
      _id: req.params.donaturId,
    });
    res.json(deleteDonatur);
  } catch (err) {
    res.json({ message: err });
  }
});

//!  search name donator
router.get('/search/name/:query', verifyToken, async (req, res) => {
  const reqName = req.params.query;
  Donatur.find(
    {
      name: reqName,
    },
    function (err, result) {
      if (err) throw err;
      if (result) {
        res.json(result);
      } else {
        res.send(
          JSON.stringify({
            error: 'Error',
          }),
        );
      }
    },
  );
});

//!  search category donator
router.get('/search/category/:query', verifyToken, async (req, res) => {
  const reqName = req.params.query;
  Donatur.find(
    {
      category: reqName,
    },
    function (err, result) {
      if (err) throw err;
      if (result) {
        res.json(result);
      } else {
        res.send(
          JSON.stringify({
            error: 'Error',
          }),
        );
      }
    },
  );
});

//!  search kondisi item donate
router.get('/search/condition/:query', verifyToken, async (req, res) => {
  const reqName = req.params.query;
  Donatur.find(
    {
      condition: reqName,
    },
    function (err, result) {
      if (err) throw err;
      if (result) {
        res.json(result);
      } else {
        res.send(
          JSON.stringify({
            error: 'Error',
          }),
        );
      }
    },
  );
});


//!  search status item donator
router.get('/search/status/:query', verifyToken, async (req, res) => {
  const reqName = req.params.query;
  Donatur.find(
    {
      status: reqName,
    },
    function (err, result) {
      if (err) throw err;
      if (result) {
        res.json(result);
      } else {
        res.send(
          JSON.stringify({
            error: 'Error',
          }),
        );
      }
    },
  );
});


//! post data donatur
router.post('/', async (req, res) => {
  const dataDonatur = new Donatur({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    desc: req.body.desc,
    item_donasi: req.body.item_donasi,
    category: req.body.category,
    condition: req.body.condition,
    status: req.body.status,
  });
  try {
    const saveDonatur = await dataDonatur.save();
    res.json(saveDonatur);
  } catch (err) {
    res.json({ message: err });
  }
});



//! update data donatur
router.post('/:id', async (req, res) => {
  Donatur.findById(req.params.id)
    .then((donatur) => {
      donatur.name = req.body.name,
      donatur.email = req.body.email,
      donatur.phone = req.body.phone,
      donatur.desc = req.body.desc,
      donatur.item_donasi = req.body.item_donasi,
      donatur.category = req.body.category,
      donatur.condition = req.body.condition,
      donatur.status = req.body.status,
        
      donatur
        .save()
        .then(() => res.json("Donatur updated in server..!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
