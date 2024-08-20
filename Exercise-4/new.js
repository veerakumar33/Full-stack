const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5004;

const data={
    "name": "Veerakumar S",
    "roll_number" : "22BAD109",
    "age": 18,
    "date_of_birth": "Sep 9 2005"
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("sole.ejs",{
    data:data 
  });
});

app.listen(port, () => {
  console.log("server is started...");
});