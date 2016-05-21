'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
    Schema = mongoose.Schema,
    paginator = require('mongoose-paginate');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var AnimeSchema = new Schema({
  title: String,
  type: String,
  status: String,
  description: String,
  rating: Number,
  airdate: String,
  enddate: String,
  episodeCount: Number,
  image: String,
  trailer: String,
  genres: [{
      type: Schema.ObjectId,
      ref: 'Genre'
    }]
});

/*
AnimeSchema.plugin(deepPopulate, {
  populate: {
    'genres': {
      select: 'name'
    }
  }
}, paginator);*/
AnimeSchema.plugin(paginator);

export default mongoose.model('Anime', AnimeSchema);
