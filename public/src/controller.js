angular.module('ContactsApp')
.controller('ListController', function($scope, Contact, $location){
	//queries the server and returns the contacts 
	$scope.contacts= Contact.query();
	$scope.fields = ['firstName', 'lastName'];
	$scope.sort = function(field){
		$scope.sort.field = field;
		$scope.sort.order = !$scope.sort.order; //will swap from false to true and vice versa
	};

	$scope.sort.field = 'firstName';
	$scope.sort.order = false; //means descending

	$scope.show = function(id){
		$location.url ('/contact/' + id);
	};
})
.controller('NewController', function($scope, Contact, $location){
	$scope.contact = new Contact({
		firstName: ['', 'text'],
		lastName: ['', 'text'],
		email: ['', 'email'],
		homePhone: ['', 'tel'], 
		cellPhone: ['', 'tel'],
		birthday: ['', 'date'],
		website: ['', 'url'],
		address: ['', 'text']
	});

	$scope.save = function(){
		//we need some validatin for first name and last name
		if($scope.newContact.$invalid){
			$scope.$broadcast('record:invalid');
		}else{
			$scope.contact.$save();
			$location.url('/contacts');
		}

	};
});