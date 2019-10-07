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
  app.controller('ShoppingListController1',ShoppingListController1);
  app.controller('ShoppingListController2',ShoppingListController2);
  //singleton service 1st value in method to be injected!!!
  app.service('ShoppingListService',ShoppingListService);
  //factory Service
  // app.factory('ShoppingListFactory',ShoppingListFactory);


  ShoppingListController1.$inject=['ShoppingListService'];
  function ShoppingListController1(shoppingListService){
    var list1=this;

    list1.toBuyItems=shoppingListService.getToBuyItems();
    //console.log(list1.items);
    list1.broughtItem=function(itemIndex){

      shoppingListService.broughtItem(itemIndex);
    };

  }
  // Controller for list #2
  ShoppingListController2.$inject=['ShoppingListService'];
  function ShoppingListController2(shoppingListService){
    var list2=this;
    list2.broughtItems=shoppingListService.getBroughtItems();
    //console.log(list1.items);

  }

  function ShoppingListService(){
    var service=this;
    var toBuyItems=[
      {name:"Cookies",quantity:"10 box"},
      {name:"chocolate",quantity:"6 box"},
      {name:"biscuit",quantity:"6 box"},
      {name:"Ice cream",quantity:"10 box"},
      {name:"Toffee",quantity:"9 box"},
      {name:"Power Bank",quantity:"8 box"},
      {name:"Charger",quantity:"7 box"}
    ];
    var broughtItems=[];


    // service.addItem=function(itemName,itemQuantity){
    //   if((maxItems===undefined)||
    //   (maxItems!==undefined)&&(items.length<maxItems)){
    //     var item={
    //       name:itemName,
    //       quantity:itemQuantity
    //     };
    //     items.push(item);
    //     console.log(items);
    //   }
    //   else{
    //     throw new Error("Max Items "+maxItems+" Reached");
    //   }
    // };
    service.getBroughtItems=function(){
      return broughtItems;
    };
    service.getToBuyItems=function(){
      return toBuyItems;
    };
    service.broughtItem=function(itemIndex){

      var itembrought=toBuyItems.splice(itemIndex,1);
      broughtItems.push(itembrought[0]);
    };

  }

  // function ShoppingListFactory(){
  //   var factory=function(maxItems){
  //     return new ShoppingListService(maxItems);
  //   };
  //   return factory;
  // }


})()
