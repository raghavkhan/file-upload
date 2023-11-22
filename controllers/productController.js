const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.send(`product created`);
  // res.send('create product');
};

const getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.json({ product, productCount: product.length });
};

module.exports = { createProduct, getAllProducts };
