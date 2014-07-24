var express = require('express');
var bodyParser = require('body-parser');
var nano = require('nano')('http://localhost:5984');
var app = express();
var nunjucks = require('nunjucks');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var nunjucksEnv = new nunjucks.Environment(null, {
  // By default output all data as HTML-encoded. To output raw data
  // for specific values in templates use the `| safe` filter
  autoescape: true
});

// Tell express to use nunjucks as its view engine
nunjucksEnv.express(app);


//Creates a new db called animals, silently fails if it exists
nano.db.create('animals');

//Use the 'animals' db
var animals = nano.db.use('animals');

app.get('/', function (req, res) {
  animals.list(function (err, data) {
    res.render('index.html', {
      data: data
    });
  });
});

app.get('/animals', function (req, res) {
  animals.list(function (err, data) {
    if (err) {
      res.send(400);
    }
    else {
      res.send(200, data.rows);
    }
  });
});

app.get('/animal/:id', function (req, res) {
  animals.get(req.params.id, function (err, data) {
    res.send(200, data);
  });
});

app.put('/animal/:id', function (req, res) {
  animals.insert(req.body, function (err, doc) {
    if (err) {
      res.send(400);
    }
    else {
      record = doc;
      res.render('index.html', {
        data: req.body
      });
    }
  });
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
