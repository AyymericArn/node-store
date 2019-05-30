const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  status: {
    type: String,
    trim: true,
  },
  creditCardNumber: {
    type: Number
  },
  paymentDate: {
    type: Date,
    trim: true,
  },
  for: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Payment', paymentSchema, 'Payments');