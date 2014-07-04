angular.module("sbManager.sample", [])
  .config ($routeProvider)->
    $routeProvider.when '/sample', 
      templateUrl: 'sample.html' 
      controller: 'SampleCtrl' 

  .controller "SampleCtrl", ($scope)->
    console.log "Sampel controller working"
