const express = require("express");
const shopifyRouter = require("./shopifyRouter");

function routerApi(app) {
  const router = express.Router();
  app.use("/", router);

  router.get("/", async function (req, res, next) {
    res.render("index", { title: "Express" });
  });

  router.use("/shopify", shopifyRouter);
}

module.exports = routerApi;
