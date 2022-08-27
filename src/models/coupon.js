const db = require('../../config/db');
const { V4: uuidv4 } = require('uuid');

const createCoupon = (data, callback) => {
  id = uuidv4();
  db.query(
    'INSERT INTO `coupon` (`iddiscount`, `count`, `amount`, `createdAt`, `updatedAt`, `customersId`) VALUES (?, ?, ?, ?, ?,?)',
    [id, data.count, data.amount, new Date(), new Date(), data.customersId],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const readCoupon = (callback) => {
  db.query('SELECT * FROM coupon', (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const readCouponById = (id, callback) => {
  db.query('SELECT * FROM `coupon` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

const editCoupon = (data, callback) => {
  db.query(
    'UPDATE `coupon` SET  (`count`=?, `amount`=?, `updatedAt`=?) WHERE `id`=?',
    [data.count, data.amount, data.updatedAt, data.iddiscount],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else NULL, res;
    }
  );
};

const removeCoupon = (id, callback) => {
  db.query('DELETE * FROM `coupon` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else NULL, res;
  });
};

module.exports = {
  createCoupon,
  readCoupon,
  readCouponById,
  editCoupon,
  removeCoupon,
};
