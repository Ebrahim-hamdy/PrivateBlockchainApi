const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to private blockchain app."});
});

require('./app/routes/block.routes.js')(app);

// listen for requests
const port = process.env.PORT || 9600;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
