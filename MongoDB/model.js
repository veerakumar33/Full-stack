const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product_model.js');

const app = express();

app.use(express.json());

app.listen(5050, () => {
  console.log('server is running on port 5050');
});

app.get('/', (req, res) => {
  res.send("Hello from Node API server");
});

app.post('/api/products', (req, res) => {
  try {
    // Add logic here for creating a product
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.connect("mongodb+srv://skvnveerakumar:<bTSDcHBJQLZIYVPw>@cluster0.i0rza.mongodb.net/").then(() => {
  console.log("database connected");
})
.catch((error) => {
  console.log("connection failed:", error.message); // Log the error message for better debugging
});
