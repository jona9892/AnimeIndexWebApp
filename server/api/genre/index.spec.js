'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var genreCtrlStub = {
  index: 'genreCtrl.index',
  show: 'genreCtrl.show',
  create: 'genreCtrl.create',
  update: 'genreCtrl.update',
  destroy: 'genreCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var genreIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './genre.controller': genreCtrlStub
});

describe('Genre API Router:', function() {

  it('should return an express router instance', function() {
    genreIndex.should.equal(routerStub);
  });

  describe('GET /api/genres', function() {

    it('should route to genre.controller.index', function() {
      routerStub.get
        .withArgs('/', 'genreCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/genres/:id', function() {

    it('should route to genre.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'genreCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/genres', function() {

    it('should route to genre.controller.create', function() {
      routerStub.post
        .withArgs('/', 'genreCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/genres/:id', function() {

    it('should route to genre.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'genreCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/genres/:id', function() {

    it('should route to genre.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'genreCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/genres/:id', function() {

    it('should route to genre.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'genreCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
