const db = require('../../config/db');
const { V4: uuidv4 } = require('uuid');

const createProduct = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `products` (`idproducts`, `name`, `longDesc`, `shortDesc`, `image`, `quantity`, `createdAt`, `updatedAt`,`price`, `discountIddiscount`) VALUES (?,?,?,?,?,?,?,?,?,?) ',
    [
      id,
      data.name,
      data.longDesc,
      data.shortDesc,
      data.image,
      data.image,
      data.quantity,
      new Date(),
      new Date(),
      data.price,
      data.discountIddiscount,
    ],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else {
        callback(NULL, res);
      }
    }
  );
};

const readProduct = (callback) => {
  db.query('SELECT * FROM products', (err, res) => {
    if (err) {
      callback(err, NULL);
    } else callback(NULL, res);
  });
};

const readProductById = (id, callback) => {
  db.query(
    'SELECT * FROM `products` WHERE `idproducts`=?',
    [id],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else {
        callback(NULL, res);
      }
    }
  );
};

const updateProduct = (data, callback) => {
  db.query(
    'UPDATE products SET `name`=? , `longDesc`=?, `shortDesc`=?, `quantity`=?,  `updatedAt`=?, `price`=? WHERE `idproducts`=?',
    [
      data.name,
      data.longDesc,
      data.shortDesc,
      data.quantity,
      new Date(),
      data.price,
      data.idproducts,
    ],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else {
        callback(NULL, res);
      }
    }
  );
};

const removeProduct = (id, callback) => {
  db.query('DELETE FROM products WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else {
      callback(NULL, res);
    }
  });
};

module.exports = {
  createProduct,
  readProduct,
  readProductById,
  updateProduct,
  removeProduct,
};
