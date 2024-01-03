const { default: mongoose } = require("mongoose");
const productsSchema = require("../schema/products");

const ProductsModel = new mongoose.model("Products", productsSchema);

module.exports = ProductsModel;
