const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donaturSchema = new Schema(
  {
    name: {
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
    keterangan: {
      type: String,
      required: true,
    },
    barang_donasi: {
      type: String,
      required: true,
    },
      category: [
        {
          type: Schema.Types.ObjectId,
          ref: 'pc',
        },
        {
          type: Schema.Types.ObjectId,
          ref: 'laptop',
        },
        {
          type: Schema.Types.ObjectId,
          ref: 'accesories',
        },
      ],
    },
  {
    timestamps: true,
    collection: 'donaturs',
  },
);

module.exports = mongoose.model('Donatur', donaturSchema);
