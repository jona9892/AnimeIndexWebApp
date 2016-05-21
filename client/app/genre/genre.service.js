'use strict'
angular.module('animeindexApp')
    .factory('GenreService', function($resource){
      return $resource('/api/genres/:id/:controller', {
        id:'@id'
      },
      {
        update: {
          method:'PUT'
        }
      }
    );
});
