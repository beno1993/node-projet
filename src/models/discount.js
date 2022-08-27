const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readDiscount = (callback) => {
  db.query('SELECT * FROM discount', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readDiscountById = (id, callback) => {
  db.query('SELECT * FROM discount WHERE iddiscount = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createDiscount = (data, callback) => {
  const id = uuidv4();
  db.query(
    'INSERT INTO `discount` (`iddiscount`, `name`, `desc`, `createdAt`, `updatedAt`) VALUES (?,?,?,?,?)',
    [id, data.name, data.desc, new Date(), new Date()],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateDiscount = (data, callback) => {
  console.log(data);

  db.query(
    'UPDATE `discount` SET `name`=?, `desc`=?, `updatedAt`=? WHERE `iddiscount`=?',
    [data.name, data.desc, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeDiscount = (id, callback) => {
  db.query('DELETE FROM discount WHERE iddiscount = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readDiscount,
  readDiscountById,
  createDiscount,
  updateDiscount,
  removeDiscount,
};
