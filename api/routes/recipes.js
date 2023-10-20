const express = require("express");
const router = express.Router();

const RecipesControllers = require("../controllers/recipes");

router.get("/", RecipesControllers.Search);
router.post("/", RecipesControllers.Create);
router.delete("/", RecipesControllers.Delete);

module.exports = router;