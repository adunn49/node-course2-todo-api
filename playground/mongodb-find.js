const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');
  db.collection('Todos').find({
    _id: new ObjectID('5a6fbdcb897b6c2838b2d2a5')
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // client.close();
});
