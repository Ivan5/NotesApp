(function(){
    var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    var notas = [
         { id: '1', titulo: 'Nota 1', descripcion: 'Descripcion 1' },
         { id: '2', titulo: 'Nota 2', descripcion: 'Descripcion 2' },
         { id: '3', titulo: 'Nota 3', descripcion: 'Descripcion 3' }
       ]; 
    function getNota(id){
        return notas.filter(function(nota){
            return nota.id === id;
        })[0];
    }
    
    function updateNota(nota){
        for(var i = 0;i<notas.length; i++){
            if(notas[i].id === nota.id){
                notas[i] = nota;
                return;
            }
        }
    }
    
    function createNota(nota){
        notas.push(nota);
    }
    app.config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('list',{
           url:'/list',
           templateUrl:'templates/list.html'
        });
        $stateProvider.state('edit',{
           url:'/edit/:id',
            controller: 'EditCtrl',
           templateUrl:'templates/edit.html'
        });
        
        $stateProvider.state('create',{
           url:'/create',
           controller: 'CreateCtrl',
           templateUrl:'templates/edit.html'
        });
        
        $urlRouterProvider.otherwise('/list');
    });
    app.controller('listCtrl',function($scope){
       $scope.notas = notas;
    });
    
    app.controller('EditCtrl',function($scope, $state){
       $scope.id = $state.params.id; 
       $scope.nota = angular.copy(getNota($scope.id));
       $scope.save = function(){
           updateNota($scope.nota);
           $state.go('list');
       };
    });
    
    app.controller('CreateCtrl',function($scope, $state){
       $scope.nota = {id: new Date().getTime().toString(), title:'', descripcion:''}
       $scope.save = function(){
           createNota($scope.nota);
           $state.go('list');
       };
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

