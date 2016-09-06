var tweetApp = angular.module('tweetApp', ['ngRoute', 'ngMaterial']);

tweetApp.directive('customMenu', function(){
	return{
		restrict: 'E', //E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: "views/menu.html"
	}
});

tweetApp.config(function($routeProvider){
	$routeProvider.when('/',{ //at /, load up home.html with home controller
		templateUrl: "views/home.html",
		controller: "homeController"
	});
	// $routeProvider.when('/:searchTerm',{
	// 	templateUrl: "views/home.html",
	// 	controller: "homeController"
	// });
	$routeProvider.when('/trump',{ //at /trump, load up same template but new controller
		templateUrl: "views/trump.html",
		controller: "trumpController"
	});
	$routeProvider.when('/hillary',{ //at /hillary, load up same template but new controller
		templateUrl: "views/hillary.html",
		controller: "hillaryController"
	});
	$routeProvider.otherwise('/'); //default
});
