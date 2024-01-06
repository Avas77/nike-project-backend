const express = require("express");
const {
  createUser,
  matchUser,
  bookProduct,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/", createUser);
router.post("/login", matchUser);
router.post("/order/:id", bookProduct);

module.exports = router;
