const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const adminPage = require('./routes/admin');
const shopPage = require('./routes/shop');

app.use(adminPage);
app.use(shopPage);

app.use((req, res, next) => {
  res.status(404).send(`
    <html>
      <head>
        <title>404 - Page Not Found</title>
      </head>
      <body>
        <h1>The page which you are looking for doesn't exist.</h1>
      </body>
    </html>
  `);
});

app.listen(3000);
