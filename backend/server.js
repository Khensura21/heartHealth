const express = require("express"),
      celery = require("celery-node"),
      app = express(),
      expressWs = require('express-ws')(app),
      cors = require('cors'),
      client = celery.createClient(
        "redis://localhost:6379/0",
        "redis://localhost:6379/0"
      ),
      bodyParser = require('body-parser');

var processDataRoute = require('./routes/processData');
const { urlencoded } = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const heartDiseasePrediction = client.createTask(
  "inference-workers.tasks.heart_disease_prediction"
);


//steps to get user its prediction
// submit user data to the database (on this part, look into sql db tutorial!!)
// redirect that user data to the inference endpoint
// run inference, get data back from celery 
// send prediction back from inference endpoint as a res.json
// display that response on the frontend w/ react via component will mount
//then your done w project +!

app.post("/inference", (req, res) => {
  // Information About The User: Age, Height, Weight, Cholestoral, Zinc
  // Train a logistic regression classifier using age, sex, chest pain, resting
  // blood pressure and serum cholestora
  //console.log(req.body.data);
  const heartData =  [
    [...Object.values(req.body.data)].slice(1)
  ];
  console.log("Calling task...\n", heartData);
  console.log(heartDiseasePrediction);
  const result = heartDiseasePrediction.applyAsync(heartData);
  console.log("About to retrieve results...");
  //console.log(result.get().then());
  result.get().then(responseData => {
    console.log(responseData);
    res.send(JSON.stringify({heartPrediction: responseData}));
    //client.disconnect();
  });

})

 app.use('/api/processData', processDataRoute);

// Consider putting the port for this into an environment variable
app.listen(3000, () => console.log("App Running: http://localhost:3000"));

