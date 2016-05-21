'use strict';

var app = require('../..');
import request from 'supertest';

var newAnime;

describe('Anime API:', function() {

  describe('GET /api/animes', function() {
    var animes;

    beforeEach(function(done) {
      request(app)
        .get('/api/animes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          animes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      animes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/animes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/animes')
        .send({
          name: 'New Anime',
          info: 'This is the brand new anime!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAnime = res.body;
          done();
        });
    });

    it('should respond with the newly created anime', function() {
      newAnime.name.should.equal('New Anime');
      newAnime.info.should.equal('This is the brand new anime!!!');
    });

  });

  describe('GET /api/animes/:id', function() {
    var anime;

    beforeEach(function(done) {
      request(app)
        .get('/api/animes/' + newAnime._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          anime = res.body;
          done();
        });
    });

    afterEach(function() {
      anime = {};
    });

    it('should respond with the requested anime', function() {
      anime.name.should.equal('New Anime');
      anime.info.should.equal('This is the brand new anime!!!');
    });

  });

  describe('PUT /api/animes/:id', function() {
    var updatedAnime;

    beforeEach(function(done) {
      request(app)
        .put('/api/animes/' + newAnime._id)
        .send({
          name: 'Updated Anime',
          info: 'This is the updated anime!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAnime = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAnime = {};
    });

    it('should respond with the updated anime', function() {
      updatedAnime.name.should.equal('Updated Anime');
      updatedAnime.info.should.equal('This is the updated anime!!!');
    });

  });

  describe('DELETE /api/animes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/animes/' + newAnime._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when anime does not exist', function(done) {
      request(app)
        .delete('/api/animes/' + newAnime._id)
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
