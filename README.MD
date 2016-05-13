#angular-tabs
Tabs component based on angular &amp; sass.

##usage:
+ html part:
```html

<nx-tabs items="items" active-index="activeIndex" css-class="header">
  <nx-tab ng-repeat="item in items">{{item.title}}</nx-tab>
</nx-tabs>

<nx-tabs items="items1" active-index="activeIndex" css-class="body">
  <nx-tab ng-repeat="item in items1">{{item.content}}</nx-tab>
</nx-tabs>

```

+ javascript part:
```javascript

var TestModule = angular.module('TestApp', ['tabs'])
    .controller('MainCtrl', function ($scope) {
      $scope.activeIndex = 2;
      $scope.items = [
        {
          title: 'Tab1',
          active: true
        },
        {
          title: 'Tab2',
          active: false
        },
        {
          title: 'Tab3',
          active: false
        }
      ];

      $scope.items1 = [
        {
          content: 'content1',
          active: true
        },
        {
          content: 'content2',
          active: false
        },
        {
          content: 'content3',
          active: false
        }
      ];


    });

```
