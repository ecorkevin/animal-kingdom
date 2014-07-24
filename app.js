var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var myDb = {};

app.get('/', function(req, res){
  res.render('index.html');
});

app.get('/animal', function(req, res){
  res.send(200);
});

app.get('/animal/:id', function(req, res){
  if(myDb[req.params.id]){
    res.send(myDb[req.params.id]);
  } else {
    res.send('No Entry with ID ' + req.params.id);
  }
});

app.put('/animal/:id', function(req, res){
  myDb[req.params.id] = req.body;
  res.send(req.body);
  console.log(myDb);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
