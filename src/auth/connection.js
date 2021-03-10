const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'phpmvc'
});
 
connection.connect((err)=> {
    if(err){
        console.log(err);
    }else{
        console.log('terkoneksi ke database');
    }
});

module.exports = connection;