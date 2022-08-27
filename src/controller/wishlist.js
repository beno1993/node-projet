const {
  readWishlist,
  readWishlistById,
  createWishlist,
  editWishlist,
  removeWishlist,
} = require('../models/Wishlist');

const getAllWishlist = (req, res) => {
  readWishlist((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Wishlists: result });
  });
};

const getWishlistById = (req, res) => {
  const id = req.params.id;
  readWishlistById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Wishlist: result[0] });
  });
};

const postWishlist = (req, res) => {
  const data = req.body;
  createWishlist(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Wishlist created !' });
    }
  });
};

const patchWishlist = (req, res) => {
  const data = req.body;
  editWishlist(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Wishlist updated !' });
    }
  });
};

const deleteWishlist = (req, res) => {
  const id = req.params.id;
  removeWishlist(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Wishlist deleted!' });
    }
  });
};

module.exports = {
  getAllWishlist,
  getWishlistById,
  postWishlist,
  patchWishlist,
  deleteWishlist,
};
