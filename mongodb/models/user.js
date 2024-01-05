const { default: mongoose } = require("mongoose");
const userSchema = require("../schema/user");

const userModel = mongoose.Model("User", userSchema);

module.exports = userModel; 
