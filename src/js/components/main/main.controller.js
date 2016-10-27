(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {

    this.filter = 0;

    /*jshint validthis: true */
    this.changeFilter = function(filter) {

      this.filter = filter;

      imagizerClient.config.autoDpr = true;

      imagizerClient.config.quality = 100;

      imagizerClient.loadImages("img");
    }
  }

})();
