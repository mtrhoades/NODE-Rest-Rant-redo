// IMPORTS
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});
console.log('connected to MONGO')


// EXPORTS
module.exports.Place = require('./places')