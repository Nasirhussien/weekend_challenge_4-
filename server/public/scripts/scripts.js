var galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryController', function(){
    console.log('gallerycontroller is running')
    var self = this;
    self.message = 'Welcome!';
  });

  