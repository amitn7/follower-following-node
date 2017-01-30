var app = angular.module("myApp", ['ngRoute','ui.bootstrap','slickCarousel']).config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
   });
   $routeProvider
   .when('/', {
   templateUrl: '/views/main.html', controller: 'MainCtrl'
   })
   .when('/#', {
   templateUrl: '/views/main.html', controller: 'MainCtrl'
   })
   .when('/directory', {
   templateUrl: '/views/directory.html', controller: 'directoryCtrl'
   })
   .when('/#/directory', {
   templateUrl: '/views/directory.html', controller: 'directoryCtrl'
   })
   .otherwise({
   redirectTo: '/'
   });

}]);
app.controller('MainCtrl', function($scope) {
   $scope.news = ["One news","Two news","Three news","Four news"];
   $scope.stripNews={
      title:"'Khoon Ki Dalaali': Rahul misses on history, fails to learn from Sonia Gandhi's mistakes",
      text:"Rahul Gandhi seems to be a slow learner or not one at all. He has not learnt a bit from the humongous mistake committed by his mother Sonia Gandhi in the run up to the 2007 Gujarat assembly elections, as evident from all the mistakes he, his mother and"
   }
});

app.controller('directoryCtrl', function($scope) {
   
});