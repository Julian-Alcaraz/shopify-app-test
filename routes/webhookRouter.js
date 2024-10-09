// Para testear esto
/*
    1: instalar ngrok y abrir cuenta
    2: levantar backend
    3: ngrok http http://localhost:3000
    4: configurar el webhook con la url que te de ngrok desde shopify 
*/
const express = require("express");
const controller = require("../controllers/webhookController");
const router = express.Router();

router.post("/listen", controller.listen);

module.exports = router;
