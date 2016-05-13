angular.module('tabs')
  .directive('nxTabs', ['$scope',function ($scope) {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="ng-widget-tabs" ng-transclude></div>',
      scope: {
        items: '=',
        activeIndex: '='
      },
      link: linkFn,
      controller: controllerFn
    };

    function linkFn(scope, element) {
      scope.$on('itemClick', function (inEvent, inArgs) {
        $scope.select(inArgs.item);
      });
    }


    function controllerFn() {

      $scope.select = select;


    }


    function select(inItem) {
      angular.forEach($scope.items, function (item, index) {
        item.active = false;
      });
      inItem.active = true;

      $scope.$apply();
    }

    function setActiveIndex(inIndex) {

    }

    function getActiveIndex() {
    }

  }]);
