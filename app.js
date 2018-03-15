(function(){
  'use strict';
  angular.module('app', ['ngMaterial','ui.router'])
  .config(function($stateProvider,$urlRouterProvider){
      
  $urlRouterProvider.otherwise("/first")
  var mainState = {
    name: 'main',
    url: '/main',
    templateUrl:  '/partials/main.html'
  }

  var firstState = {
    name: 'first',
    url: '/first',
    templateUrl:  '/partials/first.html'
  }

  $stateProvider.state(mainState);
  $stateProvider.state(firstState);
})

}())