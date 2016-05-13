/* eslint no-unused-vars:0 */
angular.module('tabs', []),
  extend = angular.extend,
  forEach = angular.forEach,
  jqLite = angular.element,
  noop = angular.noop;

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

angular.module('tabs')
  .directive('nxTab', [function () {
    return {
      restrict: 'E',
      transclude: true,
      //require: '?^TabController',
      template: '<div class="ng-widget-tab" data-active="{{item.active}}" ng-transclude></div>',
      link: linkFn
    };


    function linkFn(scope, element, attrs) {
      element.bind('click', function () {
        scope.$emit('itemClick', scope);
      })
    }

  }]);

angular.module('tabs')
  .directive('nxTabs', [function ($scope) {
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
