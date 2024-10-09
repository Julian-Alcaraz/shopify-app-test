const shopifyModel = require("../models/shopify");
const axios = require("axios");

async function getCompanyDataTest(req, res) {
  console.log(`barrer ${process.env.COMPANY_SECRET_KEY}`)
  try {
    axios
      .get("https://dev.fastenlogistics.com/api/v2/master-data/items", {
        headers: {
          "accept": "application/json",
          'x-api-key':  `${process.env.COMPANY_SECRET_KEY}`,
          // 'x-api-key':  `barrer ${process.env.COMPANY_SECRET_KEY}`,
          // Authorization: `barrer ${process.env.COMPANY_SECRET_KEY}`, // Reemplaza YOUR_SECRET_KEY con tu clave secreta
        },
        // withCredentials: true,
        // httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }) // Ignorar errores de certificado
      })
      .then(
        async (response) => {
          console.log(response)
          console.log(response.data)
          res.status(200).json(response.data)
          // res.status(200).send(response.data)
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
