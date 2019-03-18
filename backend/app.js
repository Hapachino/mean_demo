const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );

  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);

  res.status(201).json({
    message: 'post added successfully'
  });
});


app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'abcdef',
      title: 'first server post',
      content: 'from server'
    },
    {
      id: '12345',
      title: 'second server post',
      content: 'also from server',
    }
  ];

  res.status(200).json({
    message: 'posts fetched successfully!',
    posts,
  });
});

module.exports = app;
