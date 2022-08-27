const db = require('../../config/db');
const { V4: uuidv4 } = require('uuid');

const createProductcategories = (data, callback) => {
  id = uuidv4();
  db.query(
    'INSERT INTO `productcategories` (`idproductCategories`, `name`, `desc`, `image`, `createdAt`, `updatedAt`, `productsIdproducts`) VALUES (?, ?, ?, ?, ?, ? ,?)',
    [
      id,
      data.name,
      data.desc,
      data.image,
      data.createdAt,
      data.updatedAt,
      data.productsIdproducts,
    ],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const readProductcategories = (callback) => {
  db.query('SELECT * FROM productcategories', (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const readProductcategoriesById = (id, callback) => {
  db.query(
    'SELECT * FROM `productcategories WHERE `id`=?',
    [id],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const editProductcategories = (data, callback) => {
  db.query(
    'UPDATE `productcategories` SET  (`name`=?, `desc`=?, `image`=?, `updatedAt`=?) WHERE `id`=?',
    [data.name, data.desc, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const removeProductcategories = (id, callback) => {
  db.query(
    'DELETE * FROM `productcategories WHERE `id`=?',
    [id],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

module.exports = {
  createProductcategories,
  readProductcategories,
  readProductcategoriesById,
  editProductcategories,
  removeProductcategories,
};
