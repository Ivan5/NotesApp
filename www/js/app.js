(function(){
    var app = angular.module('starter', ['ionic', 'starter.notestore']);
    
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
    app.controller('listCtrl',function($scope,NoteStore){
       $scope.notas = NoteStore.list();
       $scope.remove = function(id){
         NoteStore.remove(id);  
       };
    });
    
    app.controller('EditCtrl',function($scope, $state,NoteStore){
       $scope.id = $state.params.id; 
       $scope.nota = angular.copy(NoteStore.get($scope.id));
       $scope.save = function(){
           NoteStore.update($scope.nota);
           $state.go('list');
       };
    });
    
    app.controller('CreateCtrl',function($scope, $state,NoteStore){
       $scope.nota = {id: new Date().getTime().toString(), title:'', descripcion:''}
       $scope.save = function(){
           NoteStore.create($scope.nota);
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

