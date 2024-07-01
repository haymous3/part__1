const express = require("express");

const router = express.Router();

const { getHello } = require("../controller/helloController");

router.route("/").get(getHello);

module.exports = router;
