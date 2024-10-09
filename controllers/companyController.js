const companyModel = require("../models/company");
const axios = require("axios");

async function getCompanyDataTest(req, res) {
  try {
    const response = await companyModel.fetchProducts()
    res.status(200).json(response.data)
    // res.status(200).send(response.data)
  } catch (e) {
    res.status(500).send({ success: false, message: "Error en la petición." });
  }
}

module.exports = {
  getCompanyDataTest,
};
