const { default: mongoose } = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
    required: true,
  },
  singleImg: {
    type: String,
    required: true,
  },
  orderBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "User",
  },
});

module.exports = productsSchema;
