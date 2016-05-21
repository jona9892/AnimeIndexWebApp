/**
 * Genre model events
 */

'use strict';

import {EventEmitter} from 'events';
var Genre = require('./genre.model');
var GenreEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GenreEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Genre.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    GenreEvents.emit(event + ':' + doc._id, doc);
    GenreEvents.emit(event, doc);
  }
}

export default GenreEvents;