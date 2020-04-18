const express = require("express");
const { getAllOffices } = require("../controllers/officeController");

function businessAPI(app) {
  const router = express.Router();

  app.use("/api/business", router);

  router.get("/", getAllOffices);
}

module.exports = {
  businessAPI,
};
