const express = require('express');
const client = require('./db');

client.connect((err, client) => {
  if (err) throw err;

  const db = client.db('mongo_db');
  const collection = db.collection('posts');

  // POST
  const posts = [
    {
      title: 'test1',
      content: 'hurray!',
      number: 100,
    },
    {
      title: 'test5',
      content: 'hey!',
      number: 102,
    },
  ];


  // db.collection('posts').insertMany(posts)
  // .then((res) => {
  //   console.log(res);
  // });

  // UPDATE
  // db.collection('posts').updateOne(
  //   {title: 'test5'},
  //   {
  //     $set: {
  //       title: 'test6'
  //     }
  //   }
  // )

  // DELETE
  // db.collection('posts').deleteOne(
  //   {title: 'test1'}
  // );


  // GET
  let res;
  db.collection('posts').find({
      number: {
        $gt: 50
      }
    })
    .sort( { title: 1})
    .toArray((err, data) => {
      res = data;
      console.log(res);
    });


  // DELETE


  // PUT


  // client.close();
});



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
