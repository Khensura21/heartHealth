const express = require("express"),
      app = express(),
      expressWs = require('express-ws')(app),
      cors = require('cors'),
      bodyParser = require('body-parser');

var processDataRoute = require('./routes/processData');
const { urlencoded } = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

 app.use('/api/processData', processDataRoute);

// Consider putting the port for this into an environment variable
app.listen(3000, () => console.log("App Running: http://localhost:3000"));

