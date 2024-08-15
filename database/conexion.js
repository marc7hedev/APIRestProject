const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '209.38.245.108',
    user: 'cursos',
    password: 'Marco777@123',
    database: 'cursos',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Base de datos conectada");
});

module.exports = db;