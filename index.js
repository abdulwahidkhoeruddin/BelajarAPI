// Identifikasi express dari dependencies pada package.json
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Menjalankan express
const app = express();
app.use(bodyParser.json());
const APIRoutes = require('./src/api');

// Mendefinisikan routes (GET, POST, UPDATE, PATCH, DELETE)
// Membuat fungsi Method Get
app.use("/", APIRoutes);

// Membuat server di port 3000
app.listen(3000, ()=>{
    console.log('jalan di port 3000');
})

// Perubahan coding