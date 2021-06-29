const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const siswaSchema = new Schema(
  {
    siswa_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    alamat_rumah: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    nama_sekolah: {
      type: String,
      required: true,
    },
    alamat_sekolah: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    id_admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin'
    },
    id_stock: {
      type: Schema.Types.ObjectId,
      ref: 'Stock'
    },
  },
  {
    timestamps: true,
    collection: 'siswas'
  },
);

module.exports = mongoose.model('Siswa', siswaSchema);

