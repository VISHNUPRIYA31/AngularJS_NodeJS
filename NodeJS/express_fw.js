const express = require('express');
const app = express();
var a = 10
var b = 30
app.get("/",function(req,res){
    res.send("Welcome to Express Framework")
})

app.get("/first",function(req,res){
    res.send("Welcome to Express Framework - Your are now at first page")
})

app.get("/first/number",function(req,res){
    res.send("The result is " + (a+b))
})

app.listen(9000,function(req,res){
    console.log("Server is running")
});
