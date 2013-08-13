var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.set('views', __dirname + '/views');
console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  console.log(request);
  var filename = __dirname + '/views/home.html'
  var buffer = fs.readFileSync(filename);
  response.send(buffer.toString());
});

app.get('/home', function(request, response) {
  console.log(request);
  var filename = __dirname + '/views/home.html'
  var buffer = fs.readFileSync(filename);
  response.send(buffer.toString());
});

app.get('/stills', function(request, response) {
  console.log(request);
  var filename = __dirname + '/views/stills.html'
  var buffer = fs.readFileSync(filename);
  response.send(buffer.toString());
});

app.get('/films', function(request, response) {
  console.log(request);
  var filename = __dirname + '/views/films.html'
  var buffer = fs.readFileSync(filename);
  response.send(buffer.toString());
});

app.get('/bio', function(request, response) {
  console.log(request);
  var filename = __dirname + '/views/bio.html'
  var buffer = fs.readFileSync(filename);
  response.send(buffer.toString());
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
