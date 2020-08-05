var express = require('express');
var http = require('http');
var axios = require("axios");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
db = new sqlite3.Database("./database/heart_health.db");


router.get('/', (req, res) => {
    res.send("hi from the processData route!")
});

router.post('/', (req, res) => {
    // const { name, age, sex, chestPainVal, restbps, cholesterol } = req.body.data
    // res.send("This is the post request from processData route!")
    console.log(req.body.data)
    // //   //Gather request body to populate db command
    // // db.prepare("INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?)");
    // db.serialize(function () {
    //     db.run("INSERT INTO users VALUES (age, 'name', 9, 0, 2, 155, 253)");
    //     db.each("SELECT * FROM users", (err, row) => {
    //         if (err) console.log(err);
    //         console.log(`Name: ${row.name}`);
    //     })
    // });

    // db.close();
    // const newReq = http.request({
    //     host: '127.0.0.1',
    //     port: 3000,
    //     method: 'POST',
    //     path: '/inference'
    //   }, (res) => {
    //     console.log("Made request...");
    //     res.on("data", (chunk) => {
    //         console.log(chunk);
    //     });
    //     console.log("End of request");
    //   });
    axios.post("http://localhost:3000/inference", {
      data: req.body.data
    })
      .then((req2, res) => res.send(req2.body.heartPrediction));
    //   res.redirect("https://epsn.com")

});
//db.run(`INSERT INTO users VALUES (${name}, ${age}, ${sex}, ${chestPainVal}, ${restbps}, ${cholesterol})`);
//res.send("Data was sucessfully submitted to database is the post request from processData route!")

module.exports = router;