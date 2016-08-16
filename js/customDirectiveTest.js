var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('tweetHello', function(){
	return{
		restrict: 'E', //E = Element, A = Attribute, C = Class, M = Comment
		template: "Hello Class!"
	}
});

tweetApp.directive('helloAttr', function(){
	return{
		restrict: 'A', //E = Element, A = Attribute, C = Class, M = Comment
		// template: "Hello Class from an attribute {{test}}",
		templateUrl: "views/hello.html"
	}
});

tweetApp.directive('helloClass', function(){
	return{
		restrict: 'C', //E = Element, A = Attribute, C = Class, M = Comment
		template: "Hello Class from another type of class"
	}
});

tweetApp.directive('turnMeBlue', function(){
	return{
		link: function($scope, element, attrs){
			element.bind('mouseenter', function(){
				element.css('color', $scope.myColor);
				console.log(attrs);
			});
			element.bind('mouseleave', function(){
				element.css('color', 'black');
			});
		}
	}
});