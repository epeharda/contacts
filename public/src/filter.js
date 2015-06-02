angular.module('ContactsApp')
	.filter('labelCase', function(){
		return function(input){
			                 //this regular expressiontakes any capital letter and inserts a space before it 
			input= input.replace(/([A-Z])/g, ' $1');
			return input[0].toUpperCase() + input.slice(1); 
		};
	});