const connection = require('../auth/connection');

module.exports = {
    get: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM mahasiswa`, (error, result) => {
                if(!error){
                    connection.end();
                    resolve(result);
                }else{
                    connection.end();
                    reject(error);
                }
            });
        });
    }
}
//test