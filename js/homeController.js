tweetApp.controller('homeController', function($scope, $http){
	
	// $scope.hillaryTweets = tweets;

	$scope.tweets = [];

	function Tweet(name, timeStamp, message){
		this.name = name;
		this.timeStamp = timeStamp;
		this.message = message;
	};

	$scope.tweets.push(new Tweet('Jenny', '6:05pm', 'message1'));
	$scope.tweets.push(new Tweet('Bob', '4:34am', 'message2'));
	$scope.tweets.push(new Tweet('Barb', '7:30pm', 'message3'));
	$scope.tweets.push(new Tweet('Dan', '12:30pm', 'message4'));
	$scope.tweets.push(new Tweet('Jackie', '11:34am', 'message5'));
	$scope.tweets.push(new Tweet('Ted', '8:45pm', 'message6'));
	$scope.tweets.push(new Tweet('Dirk', '3:45am', 'message7'));
	$scope.tweets.push(new Tweet('Sarah', '1:23pm', 'message8'));
	$scope.tweets.push(new Tweet('Liz', '2:45pm', 'message9'));
	$scope.tweets.push(new Tweet('John', '10:10am', 'message10'));
	


});