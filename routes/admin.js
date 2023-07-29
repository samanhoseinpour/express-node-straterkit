const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(`
      <html>
        <head>
          <title>Powered by ExpressJS</title>
        </head>
        <body>
          <h1>This is a Ordering view of our Shoping Page</h1>
          <form action="/admin/add-product" method="POST">
            <input type="text" name="product" required />
            <button type="submit">Add to Card</button>
          </form>
        </body>
      </html>
    `);
});

router.post('/add-product', (req, res, next) => {
  const { product } = req.body;
  console.log(product);
  res.redirect('/');
});

module.exports = router;
