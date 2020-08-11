var express = require('express');
var http = require('http');
var axios = require("axios");
var celery = require("celery-node");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var client = celery.createClient(
  "redis://localhost:6379/0",
  "redis://localhost:6379/0"
);
db = new sqlite3.Database("./database/heart_health.db");
const heartDiseasePrediction = client.createTask(
  "inference-workers.tasks.heart_disease_prediction"
);



router.get('/', (req, res) => {
    res.send("hi from the processData route!")
});

router.post('/', (req, res) => {
    // const { name, age, sex, chestPainVal, restbps, cholesterol } = req.body.data
    // res.send("This is the post request from processData route!")
    const heartData =  [
      [...Object.values(req.body.data)].slice(1)
    ];
    const result = heartDiseasePrediction.applyAsync(heartData);
    result.get().then(responseData => {
      res.send(JSON.stringify({heartPrediction: responseData}));
    });
});
//db.run(`INSERT INTO users VALUES (${name}, ${age}, ${sex}, ${chestPainVal}, ${restbps}, ${cholesterol})`);
//res.send("Data was sucessfully submitted to database is the post request from processData route!")

module.exports = router;