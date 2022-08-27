const db = require('../../config/db');
const { V4: uuidv4 } = require('uuid');

const createProductImage = (data, callback) => {
  id = uuidv4();
  db.query(
    'INSERT INTO `productimage` (`idproductimage`, `url`, `productsIdproducts`) VALUES (?,?,?)',
    [id, data.url, data.productsIdproducts],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else {
        callback(NULL, res);
      }
    }
  );
};

const readProductImage = (callback) => {
  db.query('SELECT * FROM productimage', (err, res) => {
    if (err) {
      callback(err, NULL);
    } else callback(NULL, res);
  });
};

const readProductImageById = (id, callback) => {
  db.query('SELECT * FROM `productimage` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const editProductImage = (data, callback) => {
  db.query(
    'UPDATE `productimage` SET  `url`=?, `productsIdproducts`=? WHERE `idproductImage`=?',
    [data.url, data.productsIdproducts, data.id],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else callback(NULL, res);
    }
  );
};

const removeProductImage = (id, callback) => {
  db.query('DELETE * FROM `productimage` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else callback(NULL, res);
  });
};

module.exports = {
  createProductImage,
  readProductImage,
  readProductImageById,
  editProductImage,
  removeProductImage,
};
