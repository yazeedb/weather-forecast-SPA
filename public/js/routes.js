weatherApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/pages/home.html',
			controller: 'homeCtrl'
		})
		.when('/forecast', {
			templateUrl: 'views/pages/forecast.html',
			controller: 'forecastCtrl'
		})
		.when('/forecast/:cnt', {
			templateUrl: 'views/pages/forecast.html',
			controller: 'forecastCtrl'
		});
});