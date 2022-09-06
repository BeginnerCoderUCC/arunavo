
//modules
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
//public and pug settle
app.use( express.static("public"));
app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));
//file require for the project

app.get("/",(req,res)=>{
    res.render("home.pug");

    
});
app.get("/project",(req,res)=>{
    res.render("projects.pug");
})
app.listen(port,()=>{
    console.log((`the server is running on port ${port} `));
})
