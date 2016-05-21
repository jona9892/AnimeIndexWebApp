'use strict';

var app = require('../..');
import request from 'supertest';

var newGenre;

describe('Genre API:', function() {

  describe('GET /api/genres', function() {
    var genres;

    beforeEach(function(done) {
      request(app)
        .get('/api/genres')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          genres = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      genres.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/genres', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/genres')
        .send({
          name: 'New Genre',
          info: 'This is the brand new genre!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newGenre = res.body;
          done();
        });
    });

    it('should respond with the newly created genre', function() {
      newGenre.name.should.equal('New Genre');
      newGenre.info.should.equal('This is the brand new genre!!!');
    });

  });

  describe('GET /api/genres/:id', function() {
    var genre;

    beforeEach(function(done) {
      request(app)
        .get('/api/genres/' + newGenre._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          genre = res.body;
          done();
        });
    });

    afterEach(function() {
      genre = {};
    });

    it('should respond with the requested genre', function() {
      genre.name.should.equal('New Genre');
      genre.info.should.equal('This is the brand new genre!!!');
    });

  });

  describe('PUT /api/genres/:id', function() {
    var updatedGenre;

    beforeEach(function(done) {
      request(app)
        .put('/api/genres/' + newGenre._id)
        .send({
          name: 'Updated Genre',
          info: 'This is the updated genre!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedGenre = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedGenre = {};
    });

    it('should respond with the updated genre', function() {
      updatedGenre.name.should.equal('Updated Genre');
      updatedGenre.info.should.equal('This is the updated genre!!!');
    });

  });

  describe('DELETE /api/genres/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/genres/' + newGenre._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when genre does not exist', function(done) {
      request(app)
        .delete('/api/genres/' + newGenre._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
