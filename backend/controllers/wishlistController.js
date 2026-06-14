const Wishlist = require("../models/wishlist");

// GET wishlist
const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find();

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ADD product
const addToWishlist = async (req, res) => {
  try {
    const product = await Wishlist.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE product
const removeFromWishlist = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);

    res.json({
      message: "Removed from wishlist",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
};