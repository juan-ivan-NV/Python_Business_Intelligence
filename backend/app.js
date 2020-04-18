const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { businessAPI } = require("./routes/business");

const app = express();

// mongoose
//   .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((res) => {
//     console.log("conectado a la base de datos: " + res.connections[0].name);
//   })
//   .catch((err) => {
//     console.log("error de coneccion en la base:" + err);
//   });

businessAPI(app);

app.listen(process.env.PORT, () => {
  console.log(` app listening on port: ${process.env.PORT} 
  http://localhost:${process.env.PORT}`);
});
