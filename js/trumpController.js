tweetApp.controller('trumpController', function($scope, $http){

	$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=trump'
	}).then(
		function successFunction(tweetData){
			$scope.tweets = tweetData.data.statuses;
			console.log(tweetData.data.statuses);

		},function failureFunction(tweetData){
			console.log(tweetData);
	});

});
