const mongoose = require('mongoose');

const serviceOrderSchema = new mongoose.Schema({
  bikeshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bikeshop'
  },
  cyclist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cyclist'
  },
  repairs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Repair'
    }
  ],
  dropoffDate: {
    type: Date
  },
  expectedPickup: {
    type: Date
  },
  description: {
    type: String
  },
  progress: [
    {
      received: {
        type: Boolean
      },
      diagnosed: {
        type: Boolean
      },
      partsOrdered: {
        type: Boolean
      },
      inProgress: {
        type: Boolean
      },
      delay: {
        type: Boolean
      },
      ready: {
        type: Boolean
      }
    }
  ]
});

const ServiceOrder = mongoose.model('ServiceOrder', serviceOrderSchema);

module.exports = ServiceOrder;
