'use strict'
const axios = require('axios')
exports.home = async (req, res) => {
     let dataProduct = []

    await axios.get("http://localhost:10000/api/getAllData")
        .then(response => {
            dataProduct = response.data.result
        })
        .catch(error => {
            dataProduct = []
        })

    await res.render('home', {
        'data': dataProduct
    });
}

exports.addData = (req, res) => {
    res.render('addData', {
        'data': "rows"
    });
}
