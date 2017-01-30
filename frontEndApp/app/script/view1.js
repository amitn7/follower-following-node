(function() {
    'use strict';

    angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: '/view/view1.html',
                controller: 'View1Ctrl'
            });
        }
    ])

    .controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
        $scope.getUserList = function() {
            $http.get('http://localhost:8080/api/user').then(function(data) {
                $scope.userList = data.data;
            });
        };
        var initialize = function() {
            $scope.getUserList();
        };
        initialize();
    }]);
}());