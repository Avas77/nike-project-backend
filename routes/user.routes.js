const express = require("express");
const { createUser, matchUser } = require("../controllers/user.controller");

const router = express.Router();

router.post("/", createUser);
router.post("/login", matchUser);

module.exports = router;
