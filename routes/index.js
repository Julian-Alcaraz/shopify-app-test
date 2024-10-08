const express = require("express");
const shopifyRouter = require("./shopifyRouter");
const companyRouter = require("./companyRouter")
function routerApi(app) {
  const router = express.Router();
  app.use("/", router);

  router.get("/", async function (req, res, next) {
    res.render("index", { title: "Express" });
  });

  router.use("/shopify", shopifyRouter);
  router.use("/company", companyRouter);
}

module.exports = routerApi;
