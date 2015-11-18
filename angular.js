var app = angular.module('myModule', []);

app.controller('myCtrl', function($scope){
  $scope.list = [
    {item:'Apple', price: 1}
  ];
  $scope.total = 0;

  $scope.addToList = function () {
    var newItem = {};
    newItem.item = $scope.newItem;
    newItem.price = $scope.newPrice;
    $scope.list.push(newItem);

    $scope.list.forEach(function(myList){
      $scope.total += myList.price;

    })

};



});
