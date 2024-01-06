const ProductsModel = require("../mongodb/models/products");
const userModel = require("../mongodb/models/user");

const createUser = async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({
      user,
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const matchUser = async (req, res) => {
  try {
    const user = await userModel.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({
      user,
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const bookProduct = async (req, res) => {
  const email = req.body.email;
  const productId = req.params.id;

  try {
    const user = await userModel.findOne({ email });
    const product = await await ProductsModel.findById(productId);
    product.orderBy = user._id;
    await product.save();
    res.status(201).send("Order Successfull");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createUser,
  matchUser,
  bookProduct,
};
