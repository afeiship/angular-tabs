angular.module('tabs')
  .directive('nxTabs', [function () {
    return {
      restrict: 'E',
      template: '<div class="ng-widget-tabs">' +
      '<nx-tab ng-click="select(item)" active="item.active" ng-repeat="item in items">{{itemTemplate()}}</nx-tab>' +
      '</div>',
      scope: {
        items: '=',
        itemTemplate: '&'
      },
      controller: controllerFn
    };
    function controllerFn($scope, $compile) {
      //var items = $scope.items || [];
      console.log($scope);
      $scope.select = select;
      /*$scope.itemTemplate = function () {
        var templateElement = angular.element('<div>{{item.title}}</div>');
        return $compile(templateElement)($scope);
      };*/


      function select(inItem) {
        angular.forEach($scope.items, function (item, key) {
          item.active = false;
        });
        inItem.active = true;
      }

    }

  }]);
