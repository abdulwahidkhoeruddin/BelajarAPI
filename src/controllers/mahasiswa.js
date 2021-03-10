const modelMahasiswa = require('../models/mahasiswa');

module.exports = {
    simpan:(req, res)=>{
        console.log(req.body);

        res.json({
            success: true,
            status: 200,
            massage: `${req.body.nama} telah berhasil di inpus`
        });
    },

    get:(req, res) => {
        modelMahasiswa
        .get()
        .then((result) => {
            res.json({
                success: true,
                status: 200,
                massage: `berhasil mengambil data`,
                data: result
            });
        })
        .catch((error)=>{
            console.log(error);
            res.json({
                success: false,
                status: 400,
                massage: `tidak dapat mengambil data`
            })
        });
    }
}