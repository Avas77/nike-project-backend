const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.method("generateAuthToken", async function generateAuthToken() {
  const user = this;
  const token = jwt.sign({ _id: user._id }, "test");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
});

module.exports = userSchema;
