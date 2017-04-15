const config = require('config');
const mongoose = require('mongoose');

// assign promise library
mongoose.Promise = Promise;

// Connect to mongodb
const { uri, options } = config.get('mongo');
mongoose.connect(uri, options);

module.exports = mongoose;
