(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('homeCtrl', [
        	'$http',
        	'$scope',
        	'HolidayService',
        	Controller
        ])

    function Controller($http, $scope, HolidayService) {
    	var vm = this

    	vm.data = {}
    	
    	HolidayService.getHolidays().then(function(response){
    		vm.data = response.data;
    	})
    }
})();