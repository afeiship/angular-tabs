angular.module('tabs')
  .directive('nxTab', [function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="ng-widget-tab" data-active="{{item.active}}" ng-transclude></div>',
      link: linkFn
    };


    function linkFn(scope, element, attrs) {
      element.bind('click', function () {
        scope.$emit('itemClick', scope);
        scope.$apply();
      })
    }

  }]);
