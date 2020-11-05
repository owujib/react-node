const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'a product must have a name'],
    },
    size: [String],
    color: [String],
    productImg: String,
    description: {
      type: String,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
