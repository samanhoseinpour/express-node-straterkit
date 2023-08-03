const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'All Products',
      hasProducts: products.length > 0,
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (products) => {
    res.render('shop/product-detail', {
      docTitle: products.title,
      title: products.title,
      imageUrl: products.imageUrl,
      price: products.price,
      description: products.description,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      docTitle: 'E-Commerce - Online Store',
      hasProducts: products.length > 0,
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    docTitle: 'Your Shopping Cart',
  });
};

exports.checkOut = (req, res, next) => {
  res.render('shop/checkout', {
    docTitle: 'Checkout',
  });
};
