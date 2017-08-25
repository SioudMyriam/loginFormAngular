'use strict';

/**
 * @ngdoc overview
 * @name app3App
 * @description
 * # app3App
 *
 * Main module of the application.
 */
angular
  .module('app3App', [
    'ngAnimate',
    'ngRoute',
    'ui.router',
    'toastr'
  ])
  /*.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/about', {
        templateUrl: 'views/about.html',
        //controller: 'MainCtrl',
        //controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
*/
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider

          .state('home', {
            url: '/',
            views:{
              'content':{
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
              },
              'navbar':{
                templateUrl: 'views/navbar.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
              },
              'sidebar':{
                templateUrl: 'views/sidebar.html'
              }
            }
          })
          .state('about', {
            url: '/about',
            views:{
              'content':{
                templateUrl: 'views/about.html',
                controller: 'aboutController'
              },
              'navbar':{
                templateUrl: 'views/navbar.html'
              },
              'sidebar':{
                templateUrl: 'views/sidebar.html'
              }
            }
          })
          .state('contact', {
            url: '/contact',
            views:{
              'content':{
                templateUrl: 'views/contact.html',
                controller: 'contactController'
              },
              'navbar':{
                templateUrl: 'views/navbar.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
              },
              'sidebar':{
                templateUrl: 'views/sidebar.html'
              }
            }
          })
        .state('exercice', {
            url: '/exercice',
            views:{
              'content':{
                templateUrl: 'views/exercice.html',
                controller: 'exerciceController',
                controllerAs: 'exercice'

              },
              'navbar':{
                templateUrl: 'views/navbar.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
              },
              'sidebar':{
                templateUrl: 'views/sidebar.html'
              }
            }
          })
    });
