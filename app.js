const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const adminPage = require('./routes/admin');
const shopPage = require('./routes/shop');

app.use('/admin', adminPage);
app.use(shopPage);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
