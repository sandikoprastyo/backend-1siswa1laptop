const router = require('express').Router();
const Stock = require('../models/Stock_model');
const verifyToken = require('../routers/verifyToken');
//const { body, validationResult } = require('express-validator');

//! get all stock
router.get('/', verifyToken, (req, res) => {
  Stock.find()
    .populate('stocks')
    .then((stock) =>
      res.json({
        success: true,
        message: stock,
      }),
    )
    .catch((err) => res.status(400).json('Error: ' + err));
});

//! get by id stock
router.get('/:id', verifyToken, (req, res) => {
  Stock.findById(req.params.id)
    .then((stock) =>
      res.json({
        success: true,
        message: stock,
      }),
    )
    .catch((err) => res.status(400).json('Error: ' + err));
});

//!  delete data stock  by id
router.delete('/:stockId', verifyToken, async (req, res) => {
  try {
    const deleteStock = await Stock.deleteOne({
      _id: req.params.stockId,
    });
    res.json(deleteStock);
  } catch (err) {
    res.json({ message: err });
  }
});

//!  search name donator
router.get('/stock/:query', verifyToken, async (req, res) => {
  const reqName = req.params.query;
  Stock.find(
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

//! post data stock
router.post('/', async (req, res) => {
  const dataStock = new Stock({
    stock_name: req.body.stock_name,
    serial_number: req.body.serial_number,
    category: req.body.category,
    status: req.body.status,
    id_donatur: req.body.id_donatur,
    id_admin: req.body.id_admin,
  });
  try {
    const saveStock = await dataStock.save();

    res.json(saveStock);
  } catch (err) {
    res.json({ message: err });
  }
});

//! update data stock
router.post('/:id', async (req, res) => {
  Donatur.findById(req.params.id)
    .then((stock) => {
      (stock.stock_name = req.body.stock_name),
        (stock.serial_number = req.body.serial_number),
        (stock.category = req.body.category),
        (stock.status = req.body.status),
        stock
          .save()
          .then(() => res.json('Donatur updated in server..!'))
          .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});
module.exports = router;
