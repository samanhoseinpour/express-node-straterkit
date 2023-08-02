const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('../views/shop/product-list', {
      prods: products,
      docTitle: 'My Shop',
      homePath: '/',
      hasProducts: products.length > 0,
    });
  });
};
