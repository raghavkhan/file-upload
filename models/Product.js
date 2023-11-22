// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model('Product', ProductSchema);

const mongoose = require('mongoose');
const SchemaObject = {
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
};
const ProductSchema = new mongoose.Schema(SchemaObject);

const Model = mongoose.model('Product', ProductSchema);
module.exports = Model;
