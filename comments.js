// Create web sever
// Create database connection
// Create schema
// Create model
// Create API
// Create test
// Create front-end
// Deploy to Heroku

// Create web sever
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// Create database connection
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mern-comment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
