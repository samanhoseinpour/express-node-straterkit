const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const adminPage = require('./routes/admin');
const shopPage = require('./routes/shop');

app.use(adminPage);
app.use(shopPage);

app.listen(3000);
