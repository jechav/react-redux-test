const express = require('express');

// http://expressjs.com/en/4x/api.html
const app = express();
const port = process.env.PORT || 8080;
const public_path = express.static(__dirname + '/public');
const index_path = __dirname + '/public/index.html';

const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

app.use(bodyParser.json())
app.use(public_path);

var db;
MongoClient.connect('mongodb://localhost/devs-text', (err, database) => {
  if (err) return console.log(err)
  db = database;
})

//ROUTE
app.post('/api/users', (req, res) => {
  console.log(req.body)
  if(req.body._id)  req.body._id = ObjectID(req.body._id) //update ovewrite
  db.collection('users').save(req.body, (err, results) => {
    if (err) return console.log(err)
    res.send(results)
  })
})

app.get('/api/users', (req, res) => {
  db.collection('users').find().toArray((err, results) => {
    res.send(results)
  })
})

app.get('*', function (request, response) {
  response.sendFile(index_path, function (error) {
    if (error) {
      console.log(error);
    }
  });
});
app.listen(port);
console.log("Listening at http://localhost:" + port);
