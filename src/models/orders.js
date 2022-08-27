const db = require('../../config/db');
const { V4: uuidv4 } = require('uuid');

const createOder = (data, callback) => {
  id = uuidv4();
  db.query(
    'INSERT INTO `oders` (`idoders`, `amount`, `tax`, `email`, `status`, `customersId`) VALUES (?, ?, ?, ?, ?,?)',
    [id, data.amount, data.tax, data.email, data.status, data.customersId],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const readOder = (callback) => {
  db.query('SELECT * FROM oders', (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const readOderById = (id, callback) => {
  db.query('SELECT * FROM `oders` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const editOder = (data, callback) => {
  db.query(
    'UPDATE `oders` SET  (`amount`=?, `tax`=?, `email`=?) WHERE `id`=?',
    [data.amount, data.tax, data.email, data.id],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const removeOder = (id, callback) => {
  db.query('DELETE * FROM `oders` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

module.exports = {
  createOder,
  readOder,
  readOderById,
  editOder,
  removeOder,
};
