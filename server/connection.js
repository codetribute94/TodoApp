const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const  http = require('http');
const Utils = require('./utils')

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'todo_app_db';
// Create a new MongoClient
const client = new MongoClient(url);
// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

   const db = client.db(dbName);

   http.createServer((request, response) => {
       switch (request.method.toUpperCase()){
           case Utils.METHODS.post: {
               handlePosts(request, response, db);
               break;
           }
           default:
               break;
       }
   }).listen(5553);
    // client.close();
});

function handlePosts(request, response, db) {
    const todoscol = db.collection('todos');
    todoscol.insertOne({dummy: 'dum dum'},
    (error, result) => {
        assert.equal(null, error);
        assert.equal(1, result.insertedCount);

    });
    response.setHeader('Access-Control-Allow-Origin', "*");
    response.setHeader('Access-Control-Request-Method', "*");
    response.setHeader('Access-Control-Allow-Headers', "*");
    response.end("successfully added to DB")
}

