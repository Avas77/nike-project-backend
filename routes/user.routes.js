const express = require("express");
const {
  createUser,
  matchUser,
  bookProduct,
  viewOrder,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/", createUser);
router.post("/login", matchUser);
router.post("/order/:id", bookProduct);
router.post("/order", viewOrder);

module.exports = router;
