const express = require("express");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

module.exports = router;
