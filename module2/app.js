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
//controller as syntax
(function(){


  'use strict';
  var app=angular.module('ControllerAsApp',[]);
  app.controller('ParentController1',ParentController1);
  app.controller('ChildController1',ChildController1);

  ParentController1.$inject=['$scope'];

  function ParentController1($scope){
    var parent=this;
    parent.value=1;
  }
  ChildController1.$inject=['$scope'];
  function ChildController1($scope){
    var child=this;
    child.value=5;
    console.log("Child Controller's scope",$scope);
  }


})()
