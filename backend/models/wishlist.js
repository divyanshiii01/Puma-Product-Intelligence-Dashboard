const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  productId: String,
  name: String,
  category: String,
  price: Number,
  discount: Number,
  rating: Number,
});

module.exports = mongoose.model("Wishlist", wishlistSchema);