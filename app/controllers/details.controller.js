(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('detailsCtrl', [
        	'$http',
        	'$scope',
            '$routeParams',
        	'HolidayService',
        	Controller
        ])

    function Controller($http, $scope, $routeParams, HolidayService) {
    	var vm = this

    	vm.data = {}
    	
    	HolidayService.getHolidays().then(function(response){
    		vm.data = response.data.holidays[$routeParams.ID];
            if(response.data.holidays[$routeParams.ID].public == true){
                vm.data.public = 'Yes';
            }
            else{
                vm.data.public = 'No';
            }
    	})
    }
})();