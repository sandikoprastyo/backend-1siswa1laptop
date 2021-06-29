const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema(
  {
    stock_name: {
      type: String,
      required: true,
    },
    serial_number: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    id_penerima: {
      type: Schema.Types.ObjectId,
      ref: 'Donatur',
    },
    id_admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    collection: 'stocks',
  },
);

module.exports = mongoose.model('Stock', stockSchema);
