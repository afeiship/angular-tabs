angular.module('tabs')
  .controller('TabController', ['$scope', function ($scope) {

    $scope.select = select;

    function select(inItem) {
      angular.forEach($scope.items, function (item, key) {
        item.active = false;
      });
      inItem.active = true;
    }

  }]);
