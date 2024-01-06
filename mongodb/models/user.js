const { default: mongoose } = require("mongoose");
const userSchema = require("../schema/user");

userSchema.static(
  "findByCredentials",
  async function findByCredentials(email, password) {
    const user = await userModel.findOne({ email }).exec();
    if (!user) {
      throw new Error("Unable to login");
    }
    return user;
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
