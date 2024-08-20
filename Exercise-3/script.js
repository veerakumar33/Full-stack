const bodyParser = require("body-parser");
const express = require("express");
const app=express();

const port=5000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('node_js'));

app.get("/",(req,res)=>{res.render("forms.ejs")});
app.listen(port,()=>{
    console.log("server is started...")
});
