const {
  readOderDetail,
  readOderDetailById,
  createOderDetail,
  editOderDetail,
  removeOderDetail,
} = require('../models/OderDetail');

const getAllOderDetail = (req, res) => {
  readOderDetail((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, OderDetails: result });
  });
};

const getOderDetailById = (req, res) => {
  const id = req.params.id;
  readOderDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, OderDetail: result[0] });
  });
};

const postOderDetail = (req, res) => {
  const data = req.body;
  createOderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OderDetail created !' });
    }
  });
};

const patchOderDetail = (req, res) => {
  const data = req.body;
  editOderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OderDetail updated !' });
    }
  });
};

const deleteOderDetail = (req, res) => {
  const id = req.params.id;
  removeOderDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OderDetail deleted!' });
    }
  });
};

module.exports = {
  getAllOderDetail,
  getOderDetailById,
  postOderDetail,
  patchOderDetail,
  deleteOderDetail,
};
