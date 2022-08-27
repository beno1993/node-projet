const {
  readOder,
  readOderById,
  createOder,
  editOder,
  removeOder,
} = require('../models/orders');

const getAllOder = (req, res) => {
  readOder((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Oders: result });
  });
};

const getOderById = (req, res) => {
  const id = req.params.id;
  readOderById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, Oder: result[0] });
  });
};

const postOder = (req, res) => {
  const data = req.body;
  createOder(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Oder created !' });
    }
  });
};

const patchOder = (req, res) => {
  const data = req.body;
  editOder(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Oder updated !' });
    }
  });
};

const deleteOder = (req, res) => {
  const id = req.params.id;
  removeOder(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Oder deleted!' });
    }
  });
};

module.exports = {
  getAllOder,
  getOderById,
  postOder,
  patchOder,
  deleteOder,
};
