tweetApp.controller('homeController', function($scope, $http){
	
	// $scope.hillaryTweets = tweets;

	$scope.tweets = [];

	function Tweet(title, userName, postContent, img, postTime){
		this.title = title;
		this.userName = userName;
		this.postContent = postContent;
		this.img = img;
		this.postTime = postTime;
	};

	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message1', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message2', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message3', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message4', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message5', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message6', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message7', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message8', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message9', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));
	$scope.tweets.push(new Tweet('This is the tiltle', 'dc4life', 'message10', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825));

	Tweet.prototype.getTimeSince = function(theDate) {
			// var timeSince =  (theDate - this.postTime) / 1000;
			// if(timeSince > secondsInAYear){
			// 	var textToPost = Math.floor(timeSince/secondsInAYear);
			// }
			return (theDate- this.postTime) / 1000;
		};
	
});