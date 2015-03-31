

var express = require('express');

var app = express();


app.get('/', function(req, res) {
   res.send(" For multiplication use /mult/:x/:y for addition use /add/:x/:y for subtraction use /sub/:x/:y and for division use /div/:x/:y where :x and :y are replaced with numbers") // Your HTML would go here. 
});

app.get('/add/:x/:y', function(req,res){
   var n1 = Number(req.params.x);  
   var n2 = Number(req.params.y); 
   var sum = n1 + n2; 
  res.send(String(sum))
}); 

app.get('/mult/:x/:y', function(req,res){
   var n1 = Number(req.params.x);  
   var n2 = Number(req.params.y); 
   var sum = n1*n2; 
  res.send(String(sum))
}); 

app.get('/div/:x/:y', function(req,res){
   var n1 = Number(req.params.x);  
   var n2 = Number(req.params.y); 
   var sum = n1/n2; 
  res.send(String(sum))
}); 

app.get('/sub/:x/:y', function(req,res){
   var n1 = Number(req.params.x);  
   var n2 = Number(req.params.y); 
   var sum = n1 - n2; 
  res.send(String(sum))
}); 


// Tell the app to start listening for
// requests on port 3000.

app.listen(3000);