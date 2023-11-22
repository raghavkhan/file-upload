const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const uploadProductImage = async (req, res) => {
  res.send('uploadProductImage');
};

module.exports = { uploadProductImage };
