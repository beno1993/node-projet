const {
  readProductDetail,
  readProductDetailById,
  createProductDetail,
  editProductDetail,
  removeProductDetail,
} = require('../models/productdetails');

const getAllProductDetail = (req, res) => {
  readProductDetail((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, ProductDetails: result });
  });
};

const getProductDetailById = (req, res) => {
  const id = req.params.id;
  readProductDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, ProductDetail: result[0] });
  });
};

const postProductDetail = (req, res) => {
  const data = req.body;
  createProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductDetail created !' });
    }
  });
};

const patchProductDetail = (req, res) => {
  const data = req.body;
  editProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductDetail updated !' });
    }
  });
};

const deleteProductDetail = (req, res) => {
  const id = req.params.id;
  removeProductDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductDetail deleted!' });
    }
  });
};

module.exports = {
  getAllProductDetail,
  getProductDetailById,
  postProductDetail,
  patchProductDetail,
  deleteProductDetail,
};
