const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  address: {
    type: String,
    trim: true,
  },
  confirmationDate: {
    type: Date,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
  items: [
    {
      description: String,
      unitPrice: {
        type: Number,
        min: 0
      },
      quantity: {
        type: Number,
        min: 0
      }
    }
  ]
});

module.exports = mongoose.model('Order', orderSchema, 'Orders');