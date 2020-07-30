var express = require('express');
var router = express.Router();
var sqlite3 = require("sqlite3").verbose()
db = new sqlite3.Database("./database/heart_health.db");


router.get('/', (req, res) => {
    res.send("hi from the processData route!")
});

router.post('/', (req, res) => {
    res.send("This is the post request from processData route!")
    console.log(req.body.data)
    //   //Gather request body to populate db command
    //   db.serialize(function() {
    //     db.run("INSERT INTO users VALUES (43, 'Weebeul', 9, 0, 2, 155, 253)");
    //     db.each("SELECT * FROM users", (err, row) => {
    //       if (err) console.log(err);
    //       console.log(`Name: ${row.name}`);
    //     })
    //   });
       
    //   db.close();
    
    //   res.redirect("https://epsn.com")
    // })
});


module.exports = router;