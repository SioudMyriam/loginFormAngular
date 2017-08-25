/**
 * Created by MSI on 21/08/17.
 */
var app = angular.module('app3App');

var root = 'https://jsonplaceholder.typicode.com/photos';

app.factory('aboutFactory', function ($http) {
  var getPosts = function () {
    return $http({
      url: root,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      return response
    })
  };
  var getPostsById = function (data) {
    return $http({
      url: root + "/" + data,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      return response
    })
  };
  return {
    getPosts: getPosts,
    getPostsById: getPostsById
  }
});


app.controller('aboutController', function (toastr, $scope, $timeout, $http, aboutFactory) {

  $scope.$watch('moyenne', function () {
    $scope.result = $scope.moyenne / 1000
  });
  function date1() {
    $timeout(function () {
      $scope.date = new Date();
      date1();
    }, 1000);
  }

  $scope.getPhoto = function (data) {
    // if (data == null || data == '') {
    //   toastr.error('OOps! Something wrong!')
    // } else {
    $scope.posts = "";
    $('.spinner').css('display', 'block');
    $http.get(root + "/photos/" + data)
      .then(function (response) {
        $scope.posts = response.data;
        console.log(response);
        toastr.success('Done');
        $('.spinner').css('display', 'none');
      })
      .catch(function (error) {
        $('.spinner').css('display', 'none');
        console.log(error);
        if (error.status == 404) {
          toastr.error("404 Not Found, OOps! Something wrong!");
        } else {
          toastr.error("OOps! Something wrong!");
        }
      });
    // }
  };

  date1();

  $scope.sendAllDataFromFactory = function () {
    aboutFactory.getPosts().then(function (data) {
      console.log(data);
      $scope.posts = data.data
    })
  };
  $scope.sendDataFromFactory = function () {
    aboutFactory.getPosts().then(function (data) {
      console.log(data);
      $scope.post2 = data.data
    })
  }

});
