'use strict';

/**
 * @ngdoc function
 * @name app3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app3App
 */
angular.module('app3App')
  .controller('MainCtrl', function ($scope,$state) {
    
      $scope.$state = $state;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      var counter = 0;
      $scope.tasks = [{ title: 'Task 1' }];
      $scope.customer = {
        name: 'David',
        street: '1234 Anywhere St.'
      };

      $scope.customers = [
        {
          name: 'David',
          street: '1234 Anywhere St.'
        },
        {
          name: 'Tina',
          street: '1800 Crest St.'
        },
        {
          name: 'Michelle',
          street: '890 Main St.'
        }
      ];
  })
.directive('isolateScopeWithController', function () {
  return {
    restrict: 'EA',
    scope: {
      datasource: '=',    //copy scope
      add: '&',     //isolate scope
    },
    controller: function ($scope) {
      var counter = 0;
      /*function init() {
        $scope.customers = angular.copy($scope.datasource);
      }
      init();*/
      $scope.customers = angular.copy($scope.datasource);
      $scope.addCustomer = function () {
        $scope.add();
        //Add new customer to directive scope
        $scope.customers.push({
          name: 'new customer',
          street: counter + ' Main St.'
        });
        counter ++;
      };
    },
    template: '<button ng-click="addCustomer()">Change Data</button><ul><li ng-repeat="cust in customers">{{ cust.name }}--{{ cust.street }}</li></ul>'
  }});


