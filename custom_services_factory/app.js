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
  //singleton service
  //app.service('ShoppingListService',ShoppingListService);
  //factory Service
  app.factory('ShoppingListFactory',ShoppingListFactory);


  ShoppingListController1.$inject=['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory){
    var list1=this;
    list1.itemName="";
    list1.itemQuantity="";
    //use factory to create new shopping list service
    var shoppingList=ShoppingListFactory();

    list1.addItem=function(){
      shoppingList.addItem(list1.itemName,list1.itemQuantity);
    }
    list1.items=shoppingList.getItems();
    //console.log(list1.items);
    list1.removeItem=function(itemIndex){

      shoppingList.removeItem(itemIndex);
    };

  }
  // Controller for list #2
  ShoppingListController2.$inject=['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory){
    var list2=this;
    list2.itemName="";
    list2.itemQuantity="";
    //use factory to create new shopping list service maxitems=3
    var shoppingList=ShoppingListFactory(3);

      list2.addItem=function(){
        try {
        shoppingList.addItem(list2.itemName,list2.itemQuantity);
        }catch(error){
            console.log("hi");
            list2.errormessage=error.message;
        }

    }
    list2.items=shoppingList.getItems();
    //console.log(list1.items);
    list2.removeItem=function(itemIndex){

      shoppingList.removeItem(itemIndex);
    };

  }

  function ShoppingListService(maxItems){
    var service=this;
    var items=[];

    service.addItem=function(itemName,itemQuantity){
      if((maxItems===undefined)||
      (maxItems!==undefined)&&(items.length<maxItems)){
        var item={
          name:itemName,
          quantity:itemQuantity
        };
        items.push(item);
        console.log(items);
      }
      else{
        throw new Error("Max Items "+maxItems+" Reached");
      }
    };
    service.getItems=function(){
      return items;
    };
    service.removeItem=function(itemIndex){

      items.splice(itemIndex,1);
    };

  }

  function ShoppingListFactory(){
    var factory=function(maxItems){
      return new ShoppingListService(maxItems);
    };
    return factory;
  }


})()
