const Office = require("../models/Office");


const getAllOffices=(req, res) => {
  Office.find()
    .then((office) => {
      res.status(200).json({ office });
    })
    .catch((err) => res.status(500).json({ err }));
}

module.exports = {getAllOffices}