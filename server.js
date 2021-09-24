require('dotenv').config()
const PORT = process.env.DEV_PORT || 8080;

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());  

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to the database!");
  }).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  app.use(express.static(__dirname+"/build"));

  app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/build/index.html', function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })


app.use(require('./app/controllers/api'));

// set port, listen for requests

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
