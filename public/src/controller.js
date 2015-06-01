angular.module('ContactsApp')
.controller('ListController', function($scope, Contact){
	//queries the server and returns the contacts 
	$scope.contacts= Contact.query();
	$scope.fields = ['firstName', 'lastName'];
	$scope.sort = function(field){
		$scope.sort.field = field;
		$scope.sort.order = !$scope.sort.order; //will swap from false to true and vice versa
	};

	$scope.sort.field = 'firstName';
	$scope.sort.order = false; //means descending
});