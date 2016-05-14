(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxTab', [function () {
      return {
        require: '^nxTabs',
        restrict: 'E',
        transclude: true,
        scope: {
          title: '@'
        },
        link: function (scope, element, attrs, tabsCtrl) {
          tabsCtrl.addPane(scope);
        },
        template: '<div class="tab-bd-item" data-active="{{selected}}" ng-transclude></div>',
        replace: true
      };

    }]);

})();
