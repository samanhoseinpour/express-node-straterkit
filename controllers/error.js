exports.showErrorPage = (req, res, next) => {
  res.render('404', {
    pageTitle: '404 Error - Page Not Found',
  });
};
