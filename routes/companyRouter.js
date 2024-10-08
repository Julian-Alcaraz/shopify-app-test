const express = require("express");
const controller = require("../controllers/companyController");
const router = express.Router();

router.get("/getCompanyDataTest", controller.getCompanyDataTest);

module.exports = router;
