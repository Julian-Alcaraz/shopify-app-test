const shopifyModel = require("../models/shopify");

// async function ejeploAction(req, res){
//     try {
//         axios.post('http://localhost:3001/', req.body, { withCredentials: true}).then(
//             async (response)  => {
//                 if(response.data.success){
//                     res.status(200).send({success: true, token: response.data.token, usuario});
//                 } else {
//                     res.status(200).send({success: false, message: 'Los datos ingresados no son válidos'});
//                 }
//             }, (error) => {
//                 res.status(500).send({success: false, message: 'Error en la petición.'});
//             }
//         );
//     } catch(e){
//         res.status(500).send({success: false, message: 'Error en la petición.'});
//     }
// }

async function getProducts(req, res) {
  try {
    const products = await shopifyModel.fetchProducts();
    console.log(products);
    res.json(products);
    // res.status(200).send({success: false, message: 'Mensaje de error'});
    // res.status(500).send({success: false, message: 'Error en la petición. '});
  } catch (e) {
    console.log(e)
    res.status(500).send({ success: false, message: "Error en la petición." });
  }
}

async function getInventory(req, res) {
  try {
    const products = await shopifyModel.fetchInventory();
    console.log(products);
    res.json(products);
    // res.status(200).send({success: false, message: 'Mensaje de error'});
    // res.status(500).send({success: false, message: 'Error en la petición. '});
  } catch (e) {
    console.log(e)
    res.status(500).send({ success: false, message: "Error en la petición." });
  }
}
module.exports = {
  getProducts,
  getInventory,
};
