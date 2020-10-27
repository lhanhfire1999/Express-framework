var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name : String,
  description : String,
  image : String
});

var Product = mongoose.model('products', productSchema);

module.exports = Product;