const express = require("express"),
      celery = require("celery-node"),
      app = express(),
      cors = require('cors');
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


app.get("/inference", (req, res) => {
  // Information About The User: Age, Height, Weight, Cholestoral, Zinc
  // Train a logistic regression classifier using age, sex, chest pain, resting
  // blood pressure and serum cholestora
  const dummyData = [[1, 2, 3, 4, 5]];
  const result = heartDiseasePrediction.applyAsync(dummyData);
  result.get().then(data => {
    console.log(`Response from Task Queue: ${data}`);
    client.disconnect();
  });
  res.send("Hello World!");
});

app.use('/api/processData', processDataRoute)

// Consider putting the port for this into an environment variable
app.listen(3000, () => console.log("App Running: http://localhost:3000"));
//cdFull-Stack web application that determines if users are likely to have a heart disease

