tweetApp.controller('homeController', function($scope, $http, $location, $routeParams, $mdDialog, $mdMedia){
	$scope.tweets = tweets;
	// console.log($location);
	console.log($routeParams);

	$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('Who\'s Twitter feed would you like to view?')
      .textContent('Type either Trump or Hillary')
      .placeholder('Next president')
      .ariaLabel('Which Tweet')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('Both');
    $mdDialog.show(confirm).then(function(result) {
      $location.path('/' + result);
    }, function() {
      $location.path('/');
    });
  };

	$scope.$watch(function(){
		return $location.path();
	},
	function(newPath){
		$scope.trump = "";
		$scope.hillary = "";
		$scope.home = "";

		// console.log("the path changed. It's now " + newPath)
		if(newPath == "/trump"){
			$scope.trump = "active";
		}else if(newPath == "/hillary"){
			$scope.hillary = "active";
		}else if(newPath = "/"){
			$scope.home = "active";
		}
	}
	);

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
