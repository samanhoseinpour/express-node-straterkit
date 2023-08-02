const path = require('path');
const fs = require('fs');

const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      console.log(err);
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
