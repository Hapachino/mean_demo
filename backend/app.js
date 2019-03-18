const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first');
});

app.use((req, res, next) => {
  res.send('hello');
});

module.exports = app;
