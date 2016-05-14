(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

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

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxTabs', [function ($scope) {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          cssClass: '@'
        },
        controller: ["$scope", function ($scope) {
          var items = $scope.items = [];

          $scope.select = function (item) {
            angular.forEach(items, function (item) {
              item.selected = false;
            });
            item.selected = true;
          };

          this.addPane = function (pane) {
            if (items.length == 0) {
              $scope.select(pane);
            }
            items.push(pane);
          };
        }],
        template: '<div class="ng-widget-tabs {{cssClass}}">' +
        '<ul class="tab-hd">' +
        '<li class="tab-hd-item" ng-repeat="item in items" data-active="{{item.selected}}">' +
        '<a href="javascript:;" ng-click="select(item)">{{item.title}}</a>' +
        '</li>' +
        '</ul>' +
        '<div class="tab-bd" ng-transclude></div>' +
        '</div>',
        replace: true
      };

    }]);


})();
