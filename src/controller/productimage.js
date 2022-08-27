const {
  readProductImage,
  readProductImageById,
  createProductImage,
  editProductImage,
  removeProductImage,
} = require('../models/ProductImage');

const getAllProductImage = (req, res) => {
  readProductImage((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, ProductImages: result });
  });
};

const getProductImageById = (req, res) => {
  const id = req.params.id;
  readProductImageById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, ProductImage: result[0] });
  });
};

const postProductImage = (req, res) => {
  const data = req.body;
  createProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductImage created !' });
    }
  });
};

const patchProductImage = (req, res) => {
  const data = req.body;
  editProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductImage updated !' });
    }
  });
};

const deleteProductImage = (req, res) => {
  const id = req.params.id;
  removeProductImage(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductImage deleted!' });
    }
  });
};

module.exports = {
  getAllProductImage,
  getProductImageById,
  postProductImage,
  patchProductImage,
  deleteProductImage,
};
