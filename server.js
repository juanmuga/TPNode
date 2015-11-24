
var express = require('express');
var app = express();

app.get('/crear', function (req, res) {
  res.send("Usuario creado")	
  
});

app.get('/modifica', function (req, res) {
  res.send("Modificar Usuario")	
  
});

app.get('/eliminar', function (req, res) {
  res.send("Eliminar Usuario")	
  
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
