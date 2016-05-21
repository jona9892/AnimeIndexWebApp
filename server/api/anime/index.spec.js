'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var animeCtrlStub = {
  index: 'animeCtrl.index',
  show: 'animeCtrl.show',
  create: 'animeCtrl.create',
  update: 'animeCtrl.update',
  destroy: 'animeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var animeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './anime.controller': animeCtrlStub
});

describe('Anime API Router:', function() {

  it('should return an express router instance', function() {
    animeIndex.should.equal(routerStub);
  });

  describe('GET /api/animes', function() {

    it('should route to anime.controller.index', function() {
      routerStub.get
        .withArgs('/', 'animeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/animes/:id', function() {

    it('should route to anime.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'animeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/animes', function() {

    it('should route to anime.controller.create', function() {
      routerStub.post
        .withArgs('/', 'animeCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/animes/:id', function() {

    it('should route to anime.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'animeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/animes/:id', function() {

    it('should route to anime.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'animeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/animes/:id', function() {

    it('should route to anime.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'animeCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
