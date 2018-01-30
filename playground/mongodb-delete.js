const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  // deleteMany
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a6fbeb4b2bf3552b4dc7026')
  }, {
    $set: {
      name: 'Fred Bloggs'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // deleteOne



  // client.close();
});
