var async = require('async');
var bodyParser = require('body-parser');
var express = require('express');
var nano = require('nano')('http://localhost:5984');
var nunjucks = require('nunjucks');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

nunjucks.configure('views', {
  express: app
});

//Creates a new db called animals, silently fails if it exists
nano.db.create('animals');

//Use the 'animals' db
var animals = nano.db.use('animals');

app.get('/', function (req, res) {
  animals.list(function (err, data) {
    var fullData = [];
    async.each(data.rows, function (row, callback) {
      animals.get(row.id, function (err, data) {
        if (err) {
          callback(err);
        }
        else {
          fullData.push(data);
          callback();
        }
      });
    }, function (err) {
      res.render('index.html', {
        animals: JSON.stringify(fullData)
      });
    });
  });
});

app.get('/animal/:id', function (req, res) {
  animals.get(req.params.id, function (err, data) {
    res.send(200, data);
  });
});

app.post('/animal/', function (req, res) {
  animals.insert(req.body, function (err, doc) {
    if (err) {
      res.send(400);
    }
    else {
      res.send(201, doc);
    }
  });
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
