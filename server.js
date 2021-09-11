const express = require('express');
const mongojs = require('mongojs');

const db = mongojs('authApp', ['users']);

const app = express();

app.use(express.json());

app.listen(9999, () => {
  console.log('Server running on port 9999');
});

app.get('/data', (req, res) => {
  res.send('It works!');
});

app.post('/signup', (req, res) => {
  //add new user
  db.users.insert(
    { username: req.body.username, password: req.body.password },
    (err, docs) => {
      res.send('OK');
    },
  );
});

app.post('/login', (req, res) => {
  console.log(req.body);
  db.users.find(
    { username: req.body.username, password: req.body.password },
    (err, docs) => {
      if (docs.length === 1) {
        res.send({
          name: docs[0].username,
          token: docs[0]._id,
        });
      }
    },
  );
});
