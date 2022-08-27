const {
  readCoupon,
  readCouponById,
  createCoupon,
  editCoupon,
  removeCoupon,
} = require('../models/Coupon');

const getAllCoupon = (req, res) => {
  readCoupon((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Coupons: result });
  });
};

const getCouponById = (req, res) => {
  const id = req.params.id;
  readCouponById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Coupon: result[0] });
  });
};

const postCoupon = (req, res) => {
  const data = req.body;
  createCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon created !' });
    }
  });
};

const patchCoupon = (req, res) => {
  const data = req.body;
  editCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon updated !' });
    }
  });
};

const deleteCoupon = (req, res) => {
  const id = req.params.id;
  removeCoupon(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon deleted!' });
    }
  });
};

module.exports = {
  getAllCoupon,
  getCouponById,
  postCoupon,
  patchCoupon,
  deleteCoupon,
};
