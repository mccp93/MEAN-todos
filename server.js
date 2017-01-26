const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index_routes = require('./server/routes/index.routes');
const api_routes = require('./server/api/api.routes');
const app = express();

// if !production 
require('dotenv').config();

// Database setup.
require('mongoose').connect(process.env.DB_URI);

// Middleware Setup
require('./server/middleware/app-middleware')(app);

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Client Folder
app.use(express.static(path.join(__dirname, 'client'), {maxAge: 0}));

// Mounting Routes
app.use('/', index_routes);
app.use('/api', api_routes);

// Listen 
app.listen(process.env.PORT || 3000, function(){
    console.log("=== Server up and running on port: " + (process.env.PORT || 3000) + " ===");
});