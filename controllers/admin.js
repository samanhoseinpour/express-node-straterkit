const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
  res.render('../views/admin/add-product', {
    pageTitle: 'Add Product',
  });
};

exports.postAddProducts = (req, res, next) => {
  const productName = req.body.product;
  const productImageUrl = req.body.imageUrl;
  const productPrice = req.body.price;
  const productDescription = req.body.description;
  const product = new Product(
    productName,
    productImageUrl,
    productPrice,
    productDescription
  );
  product.save();
  res.redirect('/admin/products');
};

exports.fetchUserProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('../views/admin/products', {
      prods: products,
      docTitle: 'Your Products',
      homePath: '/admin/products',
      hasProducts: products.length > 0,
    });
  });
};
