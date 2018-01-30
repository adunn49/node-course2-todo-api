var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://test:test123@ds119078.mlab.com:19078/mysandbox'
}
mongoose.connect( db.localhost || db.mlab);

module.exports = {mongoose};
