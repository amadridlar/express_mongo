require('colors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
let apiRoutes = require("./api-routes");
let mongoose = require('mongoose');

const app = express();

//CONFIGURATION
app.set('serverName', 'My express server');
app.set('port', 3000);

//MIDDLEWARES
app.use(morgan('dev')); //show request info in console
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//database configuration
mongoose.connect('mongodb://localhost/resthub');
let db = mongoose.connection;

//ROUTES
app.use('/api', apiRoutes);

app.listen(app.get('port'), () => {
    console.log('Server started in port'.green, app.get('port').toString().green);
    console.log('Server name: ', app.get('serverName'));
});

