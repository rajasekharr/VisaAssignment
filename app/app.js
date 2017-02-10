(function(){
	'use strict';

	angular
		.module('myApp', ['ngRoute'])
		.config([
            '$routeProvider', 
            Configuration
        ]);

     function Configuration($routeProvider) {
        $routeProvider
        .when('/',{templateUrl:'templates/home.template.html'})
        .when('/details/:ID',{templateUrl:'templates/details.template.html'})
        .otherwise({redirectTo:'/'});
    }
})();