const express = require('express');

const app = express();

app.listen(9999, () => {
  console.log('Server running on port 9999');
});

app.get('/data', (req, res) => {
  res.send('It works!');
});
