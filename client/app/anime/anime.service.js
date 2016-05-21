'use strict'
//uses the service to hold the restAPI functionality
//module is the global guy, and in this case animeindexApp
angular.module('animeindexApp')
    //We use the .factory to create a service
    //We add the AnimeService to the factory and a function which injects a $resource
    //For this to work i dependency inject this resource (Behind the scenes it is being generated)
    .factory('AnimeService', function($resource){
      //Says that the uri for the resource
      //we set the url, and a id if needed, if not used then it will ignore it
      return $resource('/api/animes/:id/:controller', {
        id:'@id'
      },
      {
        //We create our own update method
        update: {
          method:'PUT'
        },
        paged: {
          method:'GET'
        }
      }
    );
});
