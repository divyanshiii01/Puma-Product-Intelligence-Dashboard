const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  discount: Number,
  rating: Number,
});

module.exports = mongoose.model("Product", productSchema);