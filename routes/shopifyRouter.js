const express = require("express");
const controller = require("../controllers/shopifyController");
const router = express.Router();

router.get("/products", controller.getProducts);
router.get("/inventory", controller.getInventory);

module.exports = router;
