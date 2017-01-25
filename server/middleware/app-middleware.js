const express = require('express');
const bodyParser = require('body-parser');

// Setup global middleware here
module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};