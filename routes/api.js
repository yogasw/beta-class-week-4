'use strict'

const controllerApi= require('../controllers/api')
module.exports = (app) => {
    app.get('/api/getAllData', controllerApi.getData);
    app.post('/api/addData', controllerApi.addData);
}
