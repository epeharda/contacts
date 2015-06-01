angular.module('ContactsApp')
	.factory('Contact', function($resource){
		return $resource('/api/contact/:id', {id : '@id'}, {
			//older browsers used post, but newer browsers all support the put method
			'update': { method: 'PUT'}
		});
	});