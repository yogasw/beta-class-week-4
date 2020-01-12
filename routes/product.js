'use strict'

const controllerProduct = require('../controllers/product')
module.exports = (app) => {
    app.get('/', controllerProduct.home);
    app.get('/add-data', controllerProduct.addData);
}
