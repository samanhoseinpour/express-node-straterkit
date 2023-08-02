const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProducts);

router.get('/products');

router.post('/add-product', adminController.postAddProducts);

module.exports = router;
