const fs = require('fs');
const path = require('path');
const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');
const cloudinary = require('cloudinary').v2;

// errors importing
const BadRequestError = require('../errors');
const CustomError = require('../errors');

const uploadProductImageLocal = async (req, res) => {
  // checking files

  // check if file exists
  if (!req.files) {
    throw new CustomError.BadRequestError('No file uploaded');
  }
  // check format
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please upload image');
  }
  // check size
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please upload image smaller than 1 KB'
    );
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};
const uploadProductImage = async (req, res) => {
  // console.log(req.files.image);
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload',
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = { uploadProductImage };
