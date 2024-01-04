const ProductsModel = require("../mongodb/models/products");

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductsModel.find({});
    console.log({ products });
    res.status(201).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getProductById = async (req, res) => {
  res.send("Hello World");
};

const addProducts = async (req, res) => {
  const products = new ProductsModel(req.body);

  try {
    await products.save();
    res.status(201).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProducts,
};
