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
        if($scope.items==""){
          $scope.message="Please enter data first";
          //to set border color of text box and color of text
          $scope.fontcolor="red";
          $scope.bordercolor="redborder";
        }
        else{
          var itemarray=$scope.items.split(",");
          //to set border color of text box and color of text
          $scope.fontcolor="green";
          $scope.bordercolor="greenborder";
          if(itemarray.length>=4){
            $scope.message="Too much!";
          }
          else{
            $scope.message="Enjoy!";
          }
      }
    }
}


})()
