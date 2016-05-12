angular.module('tabs')
  .directive('nxTab', [function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="ng-widget-tab" data-active="{{active}}" ng-transclude></div>',
      scope: {
        active: '='
      }
    };
  }]);
