var Product = require('../models/product.model');

module.exports.index = async function(req,res){
  // var page = parseInt(req.query.page) || 1;
  // var perPage = 4;
  // var begin = (page-1)*perPage;
  // var end = page*perPage;


  // res.render('product/index',{
  //   // products : db.get('products').value().slice(begin,end)
  //   products : db.get('products').drop(begin).take(end).value()
  // });
  var products = await Product.find();
  res.render('product/index',{
    products: products
  });
}

