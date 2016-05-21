'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var GenreSchema = new mongoose.Schema({
  name: String
});


export default mongoose.model('Genre', GenreSchema);
