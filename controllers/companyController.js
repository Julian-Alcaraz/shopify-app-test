const shopifyModel = require("../models/shopify");
const axios = require("axios");

async function getCompanyDataTest(req, res) {
  try {
    axios
      .get("https://dev.fastenlogistics.com/api/v2", {
        headers: {
          Authorization: `barrer ${process.env.COMPANY_SECRET_KEY}`, // Reemplaza YOUR_SECRET_KEY con tu clave secreta
          "Content-Type": "application/json",
        },
        withCredentials: true,
        httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) // Ignorar errores de certificado
      })
      .then(
        async (response) => {
          res.status(200).send(response)
          // if (response.data.success) {
          //   res
          //     .status(200)
          //     .send({ success: true, token: response.data.token, usuario });
          // } else {
          //   res
          //     .status(200)
          //     .send({
          //       success: false,
          //       message: "Los datos ingresados no son válidos",
          //     });
          // }
        },
        (error) => {
          res
            .status(500)
            .send({ success: false, error ,message: "Error en la petición." });
        }
      );
  } catch (e) {
    res.status(500).send({ success: false, message: "Error en la petición." });
  }
}

module.exports = {
  getCompanyDataTest,
};
