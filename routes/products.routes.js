const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProducts,
} = require("../controllers/products.controller");

const router = express.Router();

router.post("/", addProducts);
router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;
