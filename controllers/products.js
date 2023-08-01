const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
  res.render('../views/admin/add-product', {
    pageTitle: 'Add Product',
  });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.product);
  product.save();
  res.redirect('/');
};

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
