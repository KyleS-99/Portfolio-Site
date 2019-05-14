const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const emailSender = require('./routes');

// initialize app
const app = express();

// app middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/', emailSender);

const port = 5000;

app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`);
});