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
    desc: {
      type: String,
      required: true,
    },
    item_donasi: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    collection: 'donaturs',
  },
);

module.exports = mongoose.model('Donatur', donaturSchema);
