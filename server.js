const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// initialize app
const app = express();

// app middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000;

app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`);
});