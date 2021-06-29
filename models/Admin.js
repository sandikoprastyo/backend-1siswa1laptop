const mongoose = require('mongoose');
const {Schema} =require('mongoose');

const adminSchema = new Schema(
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
    password: {
      type: String,
      required: true,
    },
    id_donatur: [{
      type: Schema.Types.ObjectId,
      ref: "Donatur",
    }]
  },
  {
    timestamps: true,
    collection: 'admins',
  },
);

module.exports = mongoose.model('Admin', adminSchema);
