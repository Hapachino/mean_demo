const MongoClient = require('mongodb').MongoClient;

const { uri } = require('../db.credentials');
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;
