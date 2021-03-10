const express = require('express');
const Router = express.Router();


//tugas

//bikin file di kontroller
// taro di gantiin posisi test router

const controllerMahasiswa = require("../controllers/mahasiswa");

Router.use("/mahasiswa/simpan", controllerMahasiswa.simpan);
Router.use("/mahasiswa/get", controllerMahasiswa.get)

module.exports = Router;