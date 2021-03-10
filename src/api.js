const express = require('express');
const Router = express.Router();

const mahasiswa = require("./routes/mahasiswa");

Router.use("/api", mahasiswa);


module.exports = Router;