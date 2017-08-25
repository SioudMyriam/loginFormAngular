/**
 * Created by msioud on 21/08/17.
 */

var app = angular.module('app3App');
var root = 'https://jsonplaceholder.typicode.com/photos';


app.factory('displayImage', function ($http) {
  var getPhotos = function () {
    return $http({
      url: root,
      method: "GET"
    }).then(function (response) {
      return response
    });
  };
  return {getPhotos: getPhotos}

});

app.controller('exerciceController', function ($scope, displayImage) {

  $('.spinner').css('display', 'block');
  displayImage.getPhotos().then(function (response) {
      $scope.images = response.data;
      $('.spinner').css('display', 'none');
    }
  );

  $scope.showImage = function (image) {
    displayImage.

    // $scope.url = response.data.thumbnailUrl;
    $scope.id = image.data;
    console.log(image);
    $('#myImage').modal();
  };


  // $('#myImage').on('hidden.bs.modal', function () {
  //   $scope.thumbnailUrl = "";
  //   $scope.id = "";
  //   $scope.title = "";
  // });
  // $scope.showImage = function (url, id, title) {
  //   $scope.thumbnailUrl = url;
  //   $scope.id = id;
  //   $scope.title = title;
  //
  //   $('#myImage').modal()
  // }


});
