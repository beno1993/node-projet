const db = require('../../config/db');
const { V4: uuidv4 } = require('uuid');
const { readProductById } = require('./products');

const createProductDetail = (data, callback) => {
  id = uuidv4();
  db.query(
    'INSERT INTO `productdetails` (`idproductDetail`, `size`, `age`, `gender`, `color`, `brand`, `productsIdproducts`) VALUES (?, ?, ?, ?, ?,?,?)',
    [
      id,
      data.size,
      data.age,
      data.gender,
      data.color,
      data.brand,
      data.productsIdproducts,
    ],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const readProductDetail = (callback) => {
  db.query('SELECT * FROM productdetails', (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const readProductDetailById = (id, callback) => {
  db.query('SELECT * FROM `productdetails WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const editProductDetail = (data, callback) => {
  db.query(
    'UPDATE `productdetails` SET  (`size`=?, `age`=?, `gender`=?, `color`=?, `brand`=?) WHERE `id`=?',
    [data.size, data.age, data.gender, data.color, data.brand, data.id],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const removeProductDetail = (id, callback) => {
  db.query('DELETE * FROM `productdetails WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

module.exports = {
  createProductDetail,
  readProductDetail,
  readProductDetailById,
  editProductDetail,
  removeProductDetail,
};
