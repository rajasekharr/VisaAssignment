(function(){
	'use strict';

	angular
		.module('myApp')
		.factory('HolidayService', [
			'$http',
			'$q',
			Service
		])

	function Service($http, $q){
		var cache = null;
		var service = {};
		var deferred = $q.defer();

		service.getHolidays = function(){
			if(cache != null){
				deferred.resolve(cache);
			}
			else{
				$http.get('https://holidayapi.com/v1/holidays?key=49cfe397-dedb-4a20-845b-d1a1329e1d7d&country=US&year=2016&month=02')
				.then(function(response){
					cache = response;
					deferred.resolve(cache);
				}).catch(function(response){
					deferred.reject(response);
				})
			}
			return deferred.promise;
		}
		
		return service;
	}
})();