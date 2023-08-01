const path = require('path');
const fs = require('fs');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const pth = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'product.json'
    );
    fs.readFile(pth, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(pth, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    const pth = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'product.json'
    );
    fs.readFile(pth, (err, fileContent) => {
      err ? [] : JSON.parse(fileContent);
    });
  }
};
