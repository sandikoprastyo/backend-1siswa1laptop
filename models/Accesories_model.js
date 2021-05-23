const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accesoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    brands: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    donatur: {
      type: Schema.Types.ObjectId,
      ref: 'Donatur',
    },
  },
  {
    timestamps: true,
    collection: 'accesories',
  },
);

module.exports = mongoose.model('Accesories', accesoriesSchema);
