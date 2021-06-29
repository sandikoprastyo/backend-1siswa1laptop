const router = require('express').Router();
const Siswa = require('../models/Siswa.js');
const verifyToken = require("./verifyToken");

//! get all siswa
router.get('/', verifyToken, (req, res) => {
  Siswa.find()
    .then((siswa) => res.json({
      status: 200,
      success: true,
      message: siswa,
    }))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//! get by id siswa
router.get('/:id', verifyToken, (req, res) => {
  Siswa.findById(req.params.id)
    .then((siswa) =>
      res.json({
        status: 200,
        success: true,
        message: siswa,
      }),
    )
    .catch((err) => res.status(400).json('Error: ' + err));
});

//!  delete data siswa  by id
router.delete('/:siswaId', verifyToken, async (req, res) => {
  try {
    const deleteSiswa = await Siswa.deleteOne({
      _id: req.params.siswaId,
    });
    res.json({
      status: 200,
      success: true,
      message: "OK",
      data: deleteSiswa
    });
  } catch (err) {
    res.json({
      message: err
    });
  }
});

//! post data siswa
router.post('/', async (req, res) => {
  const dataSiswa = new Siswa({
    siswa_name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    alamat_rumah: req.body.alamat_rumah,
    desc: req.body.desc,
    nama_sekolah: req.body.nama_sekolah,
    alamat_sekolah: req.body.alamat_sekolah,
    status: req.body.status,
    id_admin: req.body.id_admin,
    id_stock: req.body.id_stock
  });
  try {
    const saveSiswa = await dataSiswa.save();
    res.json({
      status: 200,
      success: true,
      message: saveSiswa
    });
  } catch (err) {
    res.json({ message: err });
  }
});

//!  search name siswa
router.get('/search/:query', verifyToken, async (req, res) => {
  const reqName = req.params.query;
  Siswa.find(
    {
      siswa_name: reqName,
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

module.exports = router;
