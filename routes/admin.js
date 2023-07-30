const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');
const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product' });
});

router.post('/add-product', (req, res, next) => {
  const { product } = req.body;
  products.push({ title: product });
  console.log(products);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
