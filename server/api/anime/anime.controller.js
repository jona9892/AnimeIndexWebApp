/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/animes              ->  index
 * POST    /api/animes              ->  create
 * GET     /api/animes/:id          ->  show
 * PUT     /api/animes/:id          ->  update
 * DELETE  /api/animes/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Anime from './anime.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}
/*
// Gets a list of Animes
export function index(req, res) {
  Anime.find({}).populate('genres', 'name')
    .execAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}*/
//------------------------------------------------------------------------------
export function index(req, res) {
  //Create the query for the different types of search
  var query = {};
  if(req.query.search && req.query.search.length > 0|| req.query.searchType &&
    req.query.searchType.length > 0 || req.query.searchStatus && req.query.searchStatus.length > 0){
    query = {
      'title':new RegExp(req.query.search, 'i'),
      'type':new RegExp(req.query.searchType, 'i'),
      'status':new RegExp(req.query.searchStatus, 'i')
    };
  }/*
  if(req.query.searchType && req.query.searchType.length > 0){
    query = {'type':new RegExp(req.query.searchType, 'i') };
  }
  if(req.query.searchStatus && req.query.searchStatus.length > 0){
    query = {'status':new RegExp(req.query.searchStatus, 'i') };
  }
  if(req.query.searchRating && req.query.searchRating.length > 0){
    query = {'rating':parseFloat(req.query.searchRating) };
  }*/

  //Make sure limit and page are numbers and above 1
  if(!req.query.limit || parseFloat(req.query.limit) < 1){
    req.query.limit = 10;
  }
  if(!req.query.page || parseFloat(req.query.page) < 1){
    req.query.page = 1;
  }

  //Create the offset (ex. page = 1 and limit = 25 would result in 0 offset. page = 2 and limit = 25 would result in 25 offset.)
  var offset = (req.query.page - 1) * req.query.limit;

  //Testing if offset is bigger then result, if yes set offset to count
  Anime.count(query, function(err, count) {
      if(offset > count){
        offset = count;
      }

      //Create object for pagination query
      var options = {
        select: 'title type status description rating airdate enddate episodeCount image trailer genres',
        sort: req.query.sortBy,
        populate: {path: 'genres', select: 'name'},
        offset: offset,
        limit: parseFloat(req.query.limit)
      };

      //Do the actual pagination
      Anime.paginate(query, options)
        .then(respondWithResult(res))
        .catch(handleError(res));
  });

}
//------------------------------------------------------------------------------




// Gets a single Anime from the DB
export function show(req, res) {
  Anime.findByIdAsync(req.params.id).populate('genres', 'name')
    .execAsync()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Anime in the DB
export function create(req, res) {
  Anime.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Anime in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Anime.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Anime from the DB
export function destroy(req, res) {
  Anime.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
