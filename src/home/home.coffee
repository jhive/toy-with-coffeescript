angular.module("sbManager.home", [])
  .config ($routeProvider)->
    $routeProvider.when '/home', 
      templateUrl: 'home/home.html' 
      controller: 'HomeCtrl' 
  .controller "HomeCtrl", ($scope) ->
    console.log("Hom Ctrl active")

