const {
  readProductcategories,
  readProductcategoriesById,
  createProductcategories,
  editProductcategories,
  removeProductcategories,
} = require('../models/Productcategories');

const getAllProductcategories = (req, res) => {
  readProductcategories((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Productcategoriess: result });
  });
};

const getProductcategoriesById = (req, res) => {
  const id = req.params.id;
  readProductcategoriesById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Productcategories: result[0] });
  });
};

const postProductcategories = (req, res) => {
  const data = req.body;
  createProductcategories(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Productcategories created !' });
    }
  });
};

const patchProductcategories = (req, res) => {
  const data = req.body;
  editProductcategories(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Productcategories updated !' });
    }
  });
};

const deleteProductcategories = (req, res) => {
  const id = req.params.id;
  removeProductcategories(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Productcategories deleted!' });
    }
  });
};

module.exports = {
  getAllProductcategories,
  getProductcategoriesById,
  postProductcategories,
  patchProductcategories,
  deleteProductcategories,
};
