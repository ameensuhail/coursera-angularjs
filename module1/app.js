// (function(){
//   'use strict';
//   angular.module('myFirstApp',[])
//   .controller('myFirstController',myFirstController);
//   myFirstController.$inject=['$scope','$filter'];
//
//   function myFirstController($scope,$filter){
//     $scope.name="ameen suhail";
//   }
//
// //.controller('myFistController',['$scope','$filter',myFirstController]);
//
//
//
//
// })()

(function(){


  'use strict';
  var app=angular.module('LunchCheck',[]);
  app.controller('LunchCheckController',lunchController);
  lunchController.$inject=['$scope','$filter'];

  function lunchController($scope,$filter){
    $scope.items="";
      $scope.check=function(){
        var itemarray=$scope.items.split(",");
        if(itemarray.length>=4){
          $scope.message="Too much!";
        }
        else{
          $scope.message="Enjoy!";
        }
    }
}


})()
