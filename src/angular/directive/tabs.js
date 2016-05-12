angular.module('tabs')
  .directive('toast', [function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="ng-widget-tabs {{cssClass}}"></div>',
      scope: {
        activeCssClass: '@'
      }
    };
  }]);
