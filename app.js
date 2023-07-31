const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const adminData = require('./routes/admin');
const shopPage = require('./routes/shop');

app.use('/admin', adminData.routes);
app.use(shopPage);

app.use((req, res, next) => {
  res.render('404', {
    pageTitle: '404 Error - Page Not Found',
  });
});

app.listen(3000);
