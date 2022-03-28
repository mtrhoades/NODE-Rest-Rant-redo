// IMPORTS
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

// EXPORTS
module.exports.Place = require('./places')