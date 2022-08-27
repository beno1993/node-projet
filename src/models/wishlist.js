const db = require('../../config/db');
const { V4: uuidv4 } = require('uuid');

const readWishlist = (callback) => {
  db.query('SELECT * FROM wishlist', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readWishlistById = (id, callback) => {
  db.query('SELECT * FROM `wishlist` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else {
      callback(NULL, res);
    }
  });
};

const createWishlist = (callback) => {
  id = uuidv4();
  db.query(
    'INSERT INTO `wishlist` (`productsIdproducts`, `customersId`, `Id`) VALUES (?,?,?)',
    [idp, idc, id],
    (err, res) => {
      if (err) {
        callback(err, NULL);
      } else {
        callback(NULL, res);
      }
    }
  );
};

const editWishlist = (data, callback) => {
//   db.query(
//     'UPDATE wishlist SET `name`=? , `longDesc`=?, `shortDesc`=?, `quantity`=?,  `updatedAt`=?, `price`=? WHERE `idwishlist`=?',
//     [
//       data.name,
//       data.longDesc,
//       data.shortDesc,
//       data.quantity,
//       new Date(),
//       data.price,
//       data.idWishlist,
//     ],
//     (err, res) => {
//       if (err) {
//         callback(err, NULL);
//       } else {
//         callback(NULL, res);
//       }
//     }
//   );
// };

const removeWishlist = (id, callback) => {
  db.query('DELETE FROM `wishlist` WHERE `id`=?', [id], (err, res) => {
    if (err) {
      callback(err, NULL);
    } else {
      callback(NULL, res);
    }
  });
};

module.exports = {
  readWishlist,
  readWishlistById,
  createWishlist,
  removeWishlist,
  editWishlist,
};
