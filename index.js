const express = require('express');
const app = express();
const config = require('./config');

// routes
const apiRouter = require('./routes/api')

app.use('/', apiRouter)

app.listen(config.port, function() {
    console.log('slucha na 3000');
});