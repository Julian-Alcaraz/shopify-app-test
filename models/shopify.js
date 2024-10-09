require("dotenv").config();
const conexion_shoopify =require('../connections/tiendaShopify')


exports.fetchProducts = async function () {
  return new Promise(async (resolve,reject)=>{
    try {
      const products = await conexion_shoopify.product.list();
      console.log(products)
      resolve(products);
    } catch (error) {
      console.log(error);
      reject(error)
    }
  })
};

exports.fetchInventory = async function () {
  return new Promise(async (resolve, reject) => {
    try {
      // const products = await shopify.product.list()
      let collection_get = await conexion_shoopify.collection.get(1);
      console.log("COLLECTION", collection_get);
      let applicationCharge = await conexion_shoopify.applicationCharge.get();
      console.log("APLICATION CHARGE", applicationCharge);

      resolve( "encontro");
    } catch (error) {
      reject(error);
    }
  });
};
