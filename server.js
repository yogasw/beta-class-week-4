const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')

const routeHome = require('./routes/product')
const routeApi = require('./routes/api')

const app = express();

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

routeHome(app)
routeApi(app)


app.listen(10000, () => {
    console.log("server started")
});

