const { Router } = require('express');
const {
  getAllDiscount,
  getDiscountById,
  postDiscoount,
  patchDiscount,
  deleteDiscount,
} = require('../controller/discount');

const router = Router();

router.get('/', getAllDiscount);
router.get('/:id', getDiscountById);
router.post('/', postDiscoount);
router.patch('/', patchDiscount);
router.delete('/:id', deleteDiscount);

module.exports = router;
