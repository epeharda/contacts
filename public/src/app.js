angular.module('ContactsApp',['ngRoute'])
.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/contacts', {
			controller: 'ListController',
			templateUrl: 'views/list.html'
		});
		//this is incase we need to add the #!
	$locationProvider.html5Mode(true);
});
