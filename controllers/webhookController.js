// const webhookModel = require("../models/webhook");
const shopifyModel = require("../models/shopify");
const companyModel = require("../models/company");
// const axios = require("axios");

async function listen(req, res) {
  try {
    console.log("EJECUTO WEBHOOk")
    
    // obtener productos empresa
    companyProducts = await companyModel.fetchProducts()
    // obtener shopi products
    shopifyProducts = await shopifyModel.fetchProducts()
    

    /* la idea entiendo que es modificar los productos de company a formato shopify 
    (formato entiendo que con los datos del archivo de ejemplo para actualizar por .cvs lo dejo en public files) 
    Una vez procesados en vez de obtener lo productos de shopi tendriamos que setear los nuevos o los que se eliminan
    */
    
    res.status(200).json({data:"EJECUTO WEBHOOk"})
  } catch (e) {
    res.status(500).send({ success: false, message: "Error en la petición." });
  }
}

module.exports = {
    listen,
};