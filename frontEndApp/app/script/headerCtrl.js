(function() {
    'use strict';

    angular.module('myApp.headerCtrl', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/header', {
                templateUrl: '/view/header.html',
                controller: 'headerCtrl'
            });
        }
    ])

    .controller('headerCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.name = "Saket";
    }]);
}());