var express = require('express');
var fs = require('fs');
var app = express();

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

app.get('/movies', function(request, response) {
  console.log(request);
  var filename = __dirname + '/views/movies.html'
  var buffer = fs.readFileSync(filename);
  response.send(buffer.toString());
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
