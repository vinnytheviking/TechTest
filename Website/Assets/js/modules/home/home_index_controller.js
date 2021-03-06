﻿var HomeIndexController = function ($scope, HomeIndexRestFactory) {

    HomeIndexRestFactory.getTestData()
           .success(function (custs) {
               $scope.detail = custs;
           })
           .error(function (error) {
               $scope.detail = 'get Unable to load customer data: ' + error.message;
           });

    $scope.postDetail = function () {
        HomeIndexRestFactory.updateTestString({testString: $scope.detail})
          .success(function (custs) {
              $scope.result = custs;
          })
          .error(function (error) {
              $scope.result = 'post Unable to load customer data: ' + error.message;
          });
    };
}
HomeIndexController.$inject = ['$scope', 'HomeIndexRestFactory'];