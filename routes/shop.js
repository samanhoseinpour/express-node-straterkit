const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`
      <html>
        <head>
          <title>Powered by ExpressJS</title>
        </head>
        <body>
          <h1>This Shoping Page is rendering by ExpressJS</h1>
          <a href="/add-product"><button>Order Product</button></a>
        </body>
      </html>
  `);
});

module.exports = router;
