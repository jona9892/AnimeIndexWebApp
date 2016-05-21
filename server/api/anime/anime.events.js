/**
 * Anime model events
 */

'use strict';

import {EventEmitter} from 'events';
var Anime = require('./anime.model');
var AnimeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AnimeEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Anime.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AnimeEvents.emit(event + ':' + doc._id, doc);
    AnimeEvents.emit(event, doc);
  }
}

export default AnimeEvents;
