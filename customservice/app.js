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
  var app=angular.module('ShoppingListApp',[]);
  app.controller('ShoppingListAddController',ShoppingListAddController);
  app.controller('ShoppingListShowController',ShoppingListShowController);
  //singleton service
  app.service('ShoppingListService',ShoppingListService);

  ShoppingListAddController.$inject=['ShoppingListService'];

  function ShoppingListAddController(ShoppingListService){
    var itemAdder=this;
    itemAdder.itemName="";
    itemAdder.itemQuantity="";

    itemAdder.addItem=function(){
      ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
    }

  }
  ShoppingListShowController.$inject=['ShoppingListService'];
  function ShoppingListShowController(ShoppingListService){
    var showList=this;
    showList.items=ShoppingListService.getItems();
    showList.removeItem=function(itemIndex){

      ShoppingListService.removeItem(itemIndex);
    };

  }

  function ShoppingListService(){
    var service=this;
    var items=[];

    service.addItem=function(itemName,itemQuantity){
      var item={
        name:itemName,
        quantity:itemQuantity
      };
      items.push(item);
      //console.log(items);
    };
    service.getItems=function(){
      return items;
    };
    service.removeItem=function(itemIndex){

      items.splice(itemIndex,1);
    };

  }


})()
