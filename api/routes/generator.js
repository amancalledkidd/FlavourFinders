const express = require("express");
const router = express.Router();

const GeneratorController = require("../controllers/generator");

router.post("/", GeneratorController.Create);

module.exports = router;