
(function(){
    var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    app.config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('list',{
           url:'/list',
           templateUrl:'templates/list.html'
        });
        $stateProvider.state('edit',{
           url:'/edit',
           templateUrl:'templates/edit.html'
        });
        $urlRouterProvider.otherwise('/list');
    });
    app.controller('listCtrl',function($scope){
       $scope.notas=[
         { titulo: 'Nota 1', descripcion: 'Descripcion 1' },
         { titulo: 'Nota 2', descripcion: 'Descripcion 2' },
       ]; 
    });

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
}());

