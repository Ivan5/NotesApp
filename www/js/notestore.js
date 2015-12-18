(function(){
var app = angular.module('starter.notestore', []);
    
    app.factory('NoteStore', function(){
       var notas = angular.fromJson(window.localStorage['notas'] || '[]');
       function persit(){
           window.localStorage['notas'] = angular.toJson(notas);
       }
       return {
           list: function(){
               return notas;
           },
           get: function(id){
             return notas.filter(function(nota){
                return nota.id === id;
             })[0];
           },
           create: function(nota){
               notas.push(nota);
               persit();
           },
           update: function(nota){
               for(var i = 0;i<notas.length; i++){
                    if(notas[i].id === nota.id){
                        notas[i] = nota;
                        persit();
                        return;
                    }
                }
           },
           remove: function(id){
               for(var i = 0;i<notas.length; i++){
                    if(notas[i].id === id){
                        notas.splice(i, 1);
                        persit();
                        return;
                    }
                }
           }
       }; 
  });
}());