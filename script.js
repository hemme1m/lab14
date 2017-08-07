(function() {

var app = angular.module("catdogApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/cat", {
		templateUrl: "views/cat.html"
	});

	$routeProvider.when("/dog", {
		templateUrl: "views/dog.html",
		controller: "dogInfoController"
	});

	$routeProvider.otherwise({
		template: "Please select an animal from the links above."
	});	
});

})();