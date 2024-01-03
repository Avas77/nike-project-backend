const { default: mongoose } = require("mongoose");
const productsSchema = require("../schema/products");

const productsModel = new mongoose.model("Products", productsSchema);

module.exports = productsModel;
