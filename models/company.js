const axios = require("axios");

exports.fetchProducts = async function () {
  return new Promise(async (resolve, reject) => {
    try {
      const header = {
        headers: {
          accept: "application/json",
          "x-api-key": `${process.env.COMPANY_SECRET_KEY}`,
        },
      };
      const products = await axios.get(
        `${process.env.COMPANY_API_URL}/master-data/items`,
        header
      );
      resolve(products);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};


