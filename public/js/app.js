var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.controller('homeCtrl', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function () {
		cityService.city = $scope.city;
	});

	$scope.submit = function () {
		$location.path('/forecast');
	};
}]);

weatherApp.controller('forecastCtrl', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {

	$scope.city = cityService.city;
	$scope.cnt = $routeParams.cnt || 3;

	$scope.forecast = weatherService.getWeather($scope.city, $scope.cnt);
}]);

weatherApp.directive('weatherPanel', function(){
	return {
		templateUrl: 'views/partials/weatherPanel.html',
		scope: {
			weatherDay: '='
		},
		replace: true
	};
});