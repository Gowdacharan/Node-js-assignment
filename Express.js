const express = require('express');
const app = express();
const port = 3000;

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");

});


app.get("/age",function(req,res){
    res.sendFile(__dirname + "/problem1.html");

});



app.get("/vegetables",function(req,res){
    res.sendFile(__dirname+"/problem2.json");
});



app.get("/metrics",function(req,res){
    res.sendFile(__dirname + "/problem3.html");

});

app.listen(port,function(req,res){
    console.log("server is running in port 3000");
});




