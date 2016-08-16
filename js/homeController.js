tweetApp.controller('homeController', function($scope, $http, $location, $routeParams){
	$scope.tweets = tweets;
	// console.log($location);
	console.log($routeParams);

	if($routeParams.searchTem){
		var searchTerm = $routeParams.searchTerm;
	}else{
		var searchTerm = 'trump';
	}

	$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash='+searchTerm
	}).then(
		function successFunction(tweetData){
			$scope.tweets = tweetData.data.statuses;
			console.log(tweetData.data.statuses);

		},function failureFunction(tweetData){
			console.log(tweetData);
	});


	$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=hillaryclinton'
	}).then(
		function successFunction(tweetData){
			$scope.tweetsH = tweetData.data.statuses;
			console.log(tweetData.data.statuses);

		},function failureFunction(tweetData){
			console.log(tweetData);
	});


});
