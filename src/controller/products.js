const {
  readProduct,
  readProductById,
  createProduct,
  updateProduct,
  removeProduct,
} = require('../models/products');

const getAllProduct = (req, res) => {
  readProduct((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Products: result });
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  readProductById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Product: result[0] });
  });
};

const postProduct = (req, res) => {
  const data = req.body;
  createProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Product created !' });
    }
  });
};

const patchProduct = (req, res) => {
  const data = req.body;
  updateProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Product updated !' });
    }
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  removeProduct(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Product deleted!' });
    }
  });
};

module.exports = {
  getAllProduct,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
};
