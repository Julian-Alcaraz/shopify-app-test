require("dotenv").config();
const conexion_shoopify =require('../connections/tiendaShopify')


exports.fetchProducts = async function () {
  try {
    const products = await conexion_shoopify.product.list();
    console.log(products)
    return products;
  } catch (error) {
    console.log(error);
  }
};
exports.fetchInventory = async function () {
  try {
    // const products = await shopify.product.list()

    let collection_get = await conexion_shoopify.collection.get(1)
    console.log("COLLECTION", collection_get );
    let applicationCharge = await conexion_shoopify.applicationCharge.get()

    console.log("APLICATION CHARGE", applicationCharge);
    // console.log("FULLFILLMENT",await conexion_shoopify.fulfillment);
    // console.log("WEBHOOK",await conexion_shoopify.webhook);
    // console.log("WEBHOOK",await conexion_shoopify.product);
    return "encontro";
  } catch (error) {
    console.log(error);
  }
};
