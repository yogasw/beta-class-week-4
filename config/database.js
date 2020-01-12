'use strict'

const mysql = require('mysql')

const database = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'arkademy'
})

database.connect(function (err) {
    if (err) throw err
});

module.exports = database
