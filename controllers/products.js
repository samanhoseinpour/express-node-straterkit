const products = [];

exports.getAddProducts = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
  });
};

exports.postAddProducts = (req, res, next) => {
  const { product } = req.body;
  products.push({ title: product });
  console.log(products);
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    docTitle: 'My Shop',
    homePath: '/',
    hasProducts: products.length > 0,
  });
};
