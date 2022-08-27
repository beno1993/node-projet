const db = require('../../config/db');
const { V4: uuidv4 } = require('uuid');

const createOderDetail = (data, callback) => {
  id = uuidv4();
  db.query(
    'INSERT INTO `oderdetail` (`idoderDetail`, `name`, `quantity`, `price`, `odersIdoders`) VALUES (?, ?, ?, ?, ?)',
    [id, data.name, data.quantity, data.price, data.odersIdoders],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const readOderDetail = (callback) => {
  db.query('SELECT * FROM oderdetail', (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const readOderDetailById = (id, callback) => {
  db.query('SELECT * FROM `oderdetail` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const editOderDetail = (data, callback) => {
  db.query(
    'UPDATE `oderdetail` SET  (`name`=?, `quantity`=?, `price`=?) WHERE `id`=?',
    [data.name, data.quantity, data.price, data.idoderDetail],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const removeOderDetail = (id, callback) => {
  db.query('DELETE * FROM `oderdetail` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

module.exports = {
  createOderDetail,
  readOderDetail,
  readOderDetailById,
  editOderDetail,
  removeOderDetail,
};
