/**
 * Created by MJ on 18/08/17.
 */
var app = angular.module('app3App');
app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
app.controller('contactController',function(toastr,$scope,$rootScope,$filter){
    $rootScope.name = 'taper votre Name';
    $scope.clearForm = function(){
        $rootScope.name = '';
        $scope.email = '';
        $scope.phone = '';
        $scope.about = '';
        toastr.warning('Forme Empty','Warning');
    }
    $scope.submitForm = function(){
        if((angular.isUndefined($rootScope.name)||$rootScope.name == null) || (angular.isUndefined($scope.phone)||$scope.phone==null)){
            toastr.warning('name and phone required','warning');
        }
        else
        {
            toastr.success('form valid','success');
            $scope.result = $filter("myFormat")($scope.about);

        }
    }


});
