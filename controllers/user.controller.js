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

module.exports = {
  createUser,
};
