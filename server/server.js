const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index_routes = require('./routes/index.routes');
const api_routes = require('./api/api.routes');
const app = express();

// Middleware Setup
require('./middleware/app-middleware')(app);

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Client Folder
app.use(express.static(path.join(__dirname, 'client')));

// Mounting Routes
app.use('/', index_routes);
app.use('/api', api_routes);

// Listen 
app.listen(process.env.PORT || 3000, function(){
    console.log("=== Server up and running on port: " + (process.env.PORT || 3000) + " ===");
});