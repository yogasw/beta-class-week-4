'use strict'

const connection = require('../config/database')

exports.getData = (req, res) => {
    connection.query(`select * from product`, (error, rows, field) => {
        let data = {
            status :202,
            message :'list data product',
            result : rows
        }
        res.status(202).json(data)
    })
}

exports.addData = (req, res) => {
    const name = req.body.name
    const price = req.body.price
    connection.query(`INSERT INTO product (name, price) VALUES (?, ?)`,[name,price],(error, rows, field) => {
        if(error){
            res.status(400).json(error)
        }
        let data = {
            status :202,
            message :'insert data success',
            result : req.body
        }
        res.status(202).json(data)
    })
}
